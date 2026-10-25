import { json, redirect, type ActionFunctionArgs, type LoaderFunctionArgs } from "@remix-run/node";
import { Form, useFetcher, useLoaderData, useNavigation, useRevalidator } from "@remix-run/react";
import { useEffect, useState } from "react";
import Pagination from "~/components/reusables/Pagination";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "~/components/reusables/Dialog";
import { toast } from "~/components/reusables/use-toast";
import { getErrorMessage } from "~/lib/utils";
import { requireAuth } from "~/lib/session.server";
import { adminRepo } from "~/services/admin/admin.server";
import { SystemConfigurationStatus, SystemConfigurationValueType, type ISystemConfigurationQuery, type SystemConfigurationResponse } from "~/services/admin/types/admin.interface";
import type { IPaginatedResponse } from "~/services/common/types/paginated_data";

type ConfigPage = IPaginatedResponse<SystemConfigurationResponse>;
type LoaderData = { configurations: ConfigPage; query: ISystemConfigurationQuery; error?: string };
type UpdateActionData = { ok: true; configuration: SystemConfigurationResponse } | { ok: false; error: string };

function buildQuery(params: URLSearchParams): ISystemConfigurationQuery {
  const query: ISystemConfigurationQuery = {};
  for (const field of ["name", "value", "description"] as const) {
    const value = params.get(field)?.trim();
    if (value) query[field] = value;
  }

  const valueType = params.get("value_type");
  if (Object.values(SystemConfigurationValueType).includes(valueType as SystemConfigurationValueType)) {
    query.value_type = valueType as SystemConfigurationValueType;
  }
  const status = params.get("status");
  if (Object.values(SystemConfigurationStatus).includes(status as SystemConfigurationStatus)) {
    query.status = status as SystemConfigurationStatus;
  }

  const pageSize = Number(params.get("page_size"));
  if (Number.isInteger(pageSize) && pageSize > 0) query.page_size = pageSize;
  const direction = params.get("direction");
  if (direction === "next") {
    query.direction = direction;
    query.last_key_id = params.get("last_key_id");
  } else if (direction === "previous") {
    query.direction = direction;
    query.first_key_id = params.get("first_key_id");
  }
  return query;
}

function emptyPage(pageSize = 20): ConfigPage {
  return { items: [], current_page: 1, total_pages: 0, total_items: 0, items_per_page: pageSize, first_key_id: null, last_key_id: null };
}

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAuth(request);
  const query = buildQuery(new URL(request.url).searchParams);
  const result = await adminRepo.getSystemConfigs(request, query);
  if (result.authRequired) return redirect("/login");
  if (result.error) {
    return json<LoaderData>({ configurations: emptyPage(query.page_size), query, error: getErrorMessage(result.error, "Unable to load system configurations.") });
  }
  return json<LoaderData>({ configurations: result.data ?? emptyPage(query.page_size), query });
}

export async function action({ request }: ActionFunctionArgs) {
  await requireAuth(request);
  const formData = await request.formData();
  if (formData.get("intent") !== "update_configuration") {
    return json<UpdateActionData>({ ok: false, error: "Unsupported configuration action." }, { status: 400 });
  }

  const configurationId = String(formData.get("configuration_id") ?? "").trim();
  const value = String(formData.get("value") ?? "");
  if (!configurationId) return json<UpdateActionData>({ ok: false, error: "Configuration ID is required." }, { status: 400 });
  if (!value.trim()) return json<UpdateActionData>({ ok: false, error: "Configuration value cannot be empty." }, { status: 400 });

  const result = await adminRepo.updateSystemConfig(request, configurationId, { value });
  if (result.authRequired) return json<UpdateActionData>({ ok: false, error: "Your session has expired. Please sign in again." }, { status: 401 });
  if (result.error || !result.data) {
    return json<UpdateActionData>({ ok: false, error: getErrorMessage(result.error, "Unable to update this configuration.") }, { status: 400 });
  }
  return json<UpdateActionData>({ ok: true, configuration: result.data });
}

function ConfigurationSkeleton() {
  return <div className="grid gap-3 animate-pulse" aria-label="Loading system configurations">{[0, 1, 2].map(item => <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5"><div className="h-4 w-36 rounded bg-slate-200" /><div className="mt-4 h-5 w-2/3 rounded bg-slate-200" /><div className="mt-3 h-4 w-1/2 rounded bg-slate-100" /></div>)}</div>;
}

function ConfigurationCard({ configuration, onEdit }: { configuration: SystemConfigurationResponse; onEdit: (configuration: SystemConfigurationResponse) => void }) {
  return <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md sm:p-5">
    <div className="flex flex-wrap items-start justify-between gap-3">
      <div className="min-w-0"><h3 className="break-all font-bold text-slate-900">{configuration.name}</h3><p className="mt-1 break-words text-sm text-slate-500">{configuration.description || "No description"}</p></div>
      <div className="flex shrink-0 items-center gap-2"><span className={`rounded-full px-2.5 py-1 text-xs font-semibold capitalize ${configuration.status === SystemConfigurationStatus.ACTIVE ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-600"}`}>{configuration.status}</span><button type="button" onClick={() => onEdit(configuration)} className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700 transition hover:border-brand-pink hover:text-brand-pink">Update Configuration</button></div>
    </div>
    <dl className="mt-4 grid grid-cols-1 gap-2 border-t border-slate-100 pt-3 sm:grid-cols-2">
      <div className="min-w-0 rounded-xl bg-slate-50 p-3"><dt className="text-xs text-slate-500">Value</dt><dd className="mt-1 break-all font-mono text-sm font-semibold text-slate-900">{configuration.value}</dd></div>
      <div className="min-w-0 rounded-xl bg-slate-50 p-3"><dt className="text-xs text-slate-500">Value type</dt><dd className="mt-1 break-words text-sm font-semibold uppercase text-slate-900">{configuration.value_type}</dd></div>
    </dl>
  </article>;
}

export function useAdminConfigurationsController() {
  const { configurations, query, error } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const updateFetcher = useFetcher<typeof action>();
  const { revalidate } = useRevalidator();
  const [selectedConfiguration, setSelectedConfiguration] = useState<SystemConfigurationResponse | null>(null);
  const [value, setValue] = useState("");
  const isLoading = navigation.state !== "idle" && navigation.location?.pathname === "/admin/configurations";
  const submitting = updateFetcher.state !== "idle";

  useEffect(() => {
    if (error) toast({ variant: "destructive", title: "Unable to load system configurations", description: error });
  }, [error]);

  useEffect(() => {
    const data = updateFetcher.data;
    if (!data) return;
    if (data.ok) {
      toast({ title: "Configuration updated", description: `${data.configuration.name} is now ${data.configuration.status}. Updated value: ${data.configuration.value}` });
      setSelectedConfiguration(null);
      revalidate();
    } else {
      toast({ variant: "destructive", title: "Unable to update configuration", description: data.error });
    }
  }, [updateFetcher.data, revalidate]);

  const openEditor = (configuration: SystemConfigurationResponse) => {
    setValue(configuration.value);
    setSelectedConfiguration(configuration);
  };
  const closeEditor = (open: boolean) => {
    if (!open && !submitting) setSelectedConfiguration(null);
  };
  return { configurations, query, error, isLoading, updateFetcher, selectedConfiguration, value, setValue, submitting, openEditor, closeEditor };
}

export default function AdminConfigurations() {
  const { configurations, query, error, isLoading, updateFetcher, selectedConfiguration, value, setValue, submitting, openEditor, closeEditor } = useAdminConfigurationsController();
  const valueType = selectedConfiguration?.value_type;
  return <main className="mx-auto min-h-full w-full max-w-7xl overflow-y-auto bg-slate-50/60 p-4 sm:p-6 lg:p-8">
    <header className="mb-6 sm:mb-8"><p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-pink">Administration</p><h1 className="mt-2 text-2xl font-black text-primary sm:text-3xl">System configurations</h1><p className="mt-2 text-sm text-slate-600">Review and update the settings the system is currently using.</p></header>
    <Form method="get" className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-4"><h2 className="font-bold text-slate-900">Search configurations</h2><p className="mt-1 text-xs text-slate-500">Filter by name, value, type, description, or status.</p></div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <label className="grid gap-1 text-xs font-medium text-slate-600">Name<input name="name" defaultValue={query.name ?? ""} placeholder="Configuration name" className="rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-900" /></label>
        <label className="grid gap-1 text-xs font-medium text-slate-600">Value<input name="value" defaultValue={query.value ?? ""} placeholder="Configuration value" className="rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-900" /></label>
        <label className="grid gap-1 text-xs font-medium text-slate-600">Value type<select name="value_type" defaultValue={query.value_type ?? ""} className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900"><option value="">All types</option>{Object.values(SystemConfigurationValueType).map(type => <option key={type} value={type}>{type.toUpperCase()}</option>)}</select></label>
        <label className="grid gap-1 text-xs font-medium text-slate-600">Description<input name="description" defaultValue={query.description ?? ""} placeholder="Description" className="rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-900" /></label>
        <label className="grid gap-1 text-xs font-medium text-slate-600">Status<select name="status" defaultValue={query.status ?? ""} className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900"><option value="">All statuses</option>{Object.values(SystemConfigurationStatus).map(status => <option key={status} value={status}>{status}</option>)}</select></label>
      </div>
      <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end"><a href="/admin/configurations" className="rounded-lg border border-slate-200 px-4 py-2.5 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50">Clear filters</a><button type="submit" className="rounded-lg bg-brand-pink px-5 py-2.5 text-sm font-bold text-white transition hover:scale-[1.01]">Search configurations</button></div>
    </Form>
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"><div className="mb-4 flex flex-wrap items-center justify-between gap-2"><h2 className="font-bold text-slate-900">Configuration results</h2><span className="text-xs text-slate-500">{configurations.total_items} total</span></div>
      {isLoading ? <ConfigurationSkeleton /> : error ? <div role="status" className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">Configuration data could not be loaded. See the error notification for details.</div> : configurations.items.length === 0 ? <div className="rounded-xl border border-dashed border-slate-200 px-4 py-12 text-center"><p className="font-semibold text-slate-800">No system configurations found</p><p className="mt-1 text-sm text-slate-500">Try adjusting your search filters.</p></div> : <>
        <div className="grid gap-3">{configurations.items.map(configuration => <ConfigurationCard key={configuration._id} configuration={configuration} onEdit={openEditor} />)}</div>
        <Pagination lastKey={configurations.last_key_id} firstKey={configurations.first_key_id} pageSize={configurations.items_per_page} />
      </>}
    </section>
    <Dialog open={!!selectedConfiguration} onOpenChange={closeEditor}>
      <DialogContent className="max-h-[90vh] overflow-y-auto border-slate-200 bg-white sm:max-w-xl">
        {selectedConfiguration && <>
          <DialogHeader className="min-w-0 text-left"><DialogTitle className="text-xl font-black text-slate-950">Update Configuration</DialogTitle><DialogDescription className="break-all">Update the value for {selectedConfiguration.name}. The setting type is {selectedConfiguration.value_type.toUpperCase()}.</DialogDescription></DialogHeader>
          <updateFetcher.Form method="post" className="space-y-4">
            <input type="hidden" name="intent" value="update_configuration" /><input type="hidden" name="configuration_id" value={selectedConfiguration._id} />
            <label className="grid gap-1.5 text-sm font-semibold text-slate-800">Value
              {valueType === SystemConfigurationValueType.BOOL ? <select name="value" required value={value} onChange={event => setValue(event.target.value)} className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 font-normal outline-none focus:border-brand-pink focus:ring-2 focus:ring-pink-100"><option value="">Choose a value</option><option value="true">True</option><option value="false">False</option></select> : <input name="value" required type={valueType === SystemConfigurationValueType.INT || valueType === SystemConfigurationValueType.FLOAT || valueType === SystemConfigurationValueType.DECIMAL ? "number" : "text"} step={valueType === SystemConfigurationValueType.INT ? "1" : "any"} value={value} onChange={event => setValue(event.target.value)} className="rounded-lg border border-slate-200 px-3 py-2.5 font-normal outline-none focus:border-brand-pink focus:ring-2 focus:ring-pink-100" />}
            </label>
            <DialogFooter className="gap-2 sm:gap-3"><DialogClose asChild><button type="button" disabled={submitting} className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700">Cancel</button></DialogClose><button type="submit" disabled={submitting || !value.trim()} className="rounded-lg bg-brand-pink px-5 py-2.5 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-60">{submitting ? "Saving…" : "Save changes"}</button></DialogFooter>
          </updateFetcher.Form>
        </>}
      </DialogContent>
    </Dialog>
  </main>;
}
