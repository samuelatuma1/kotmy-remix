import { ActionFunctionArgs, LoaderFunctionArgs, json, redirect } from "@remix-run/node"
import { useLoaderData, useFetcher, useActionData } from "@remix-run/react"
import { setToast } from "~/lib/session.server"
import { adminRepo } from '~/services/admin/admin.server';
import { ICreateBankTransaction } from '~/services/admin/types/admin.interface';

import { Form } from "@remix-run/react"
import { icons } from "~/assets/icons"
import Cta from "~/components/reusables/Cta"
import FormControl from "~/components/reusables/FormControl"
import Select from "~/components/reusables/Select"
import Svg from "~/components/reusables/Svg"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "~/components/reusables/Dialog"
import { cn } from "~/lib/utils"
import { useEffect, useState } from "react";
import { toast } from "~/components/reusables/use-toast"



export async function loader({ request }: LoaderFunctionArgs) {
    const cookieHeader = request.headers.get('Cookie') ?? '';
     if (!cookieHeader) {
      // User is not signed in
      return redirect("/login"); 
    }
    // parse query params
    const url = new URL(request.url);
    const query: any = {};
    for (const [k, v] of url.searchParams.entries()) {
        query[k] = v;
    }

    const [res, ongoingContests] = await Promise.all([adminRepo.getPayments(cookieHeader, query), contestRepo.query_contest({status: 'ongoing'}, cookieHeader)])
    // const res = await adminRepo.getPayments(cookieHeader, query);
    // if (res.data) {
    //     return json({ tranasctions: res.data.items, last_key_id: res.data.last_key_id });
    // }
    if(res.authRequired){
      return redirect("/login"); 
    }

    
    return {data: res.data, error: res.error, authRequired: res.authRequired, ongoingContests: ongoingContests.data ?? []}

}

export async function action({ request }: ActionFunctionArgs) {
    const cookieHeader = request.headers.get("Cookie") ?? "";
    const formData = await request.formData();
    let contest_id = formData.get('contest_id') as string
    if(!contest_id) return json({error: {detail: "Please use a valid contest"}, data: null})
    const payload: ICreateBankTransaction = {
        email: (formData.get('email') as string) ?? '',
        phone_number: (formData.get('phone_number') as string) ?? '',
        name: (formData.get('name') as string) ?? '',
        contest_id: (formData.get('contest_id') as string) ?? '',
        contestant_code: (formData.get('contestant_code') as string) ?? '',
        amount: Number(formData.get('amount') ?? 0),
        currency: (formData.get('currency') as string) ?? 'NGN',
        gateway_status: (formData.get('gateway_status') as string),
        bank_ref: (formData.get('bank_ref') as string) ?? `BANKTXN_${Date.now()}`
    };

    const { data, error, authRequired } = await adminRepo.createBankTransaction(cookieHeader, payload);
    return json({error, data, authRequired})
    // if (authRequired) return redirect('/login');
    // if (error) {

    //     return json({error})
    //     const { headers } = await setToast({ request, toast: `error::Could not create transaction. ${error}::${Date.now()}` });
    //     return redirect(request.url, { headers });
    // }

    // return json({data})

    // const { headers } = await setToast({ request, toast: `success::Transaction created::${Date.now()}` });
    // return redirect(request.url, { headers });
}

export function AddTallyDialog({ongoingContests}:{ongoingContests: IContestWStage[]}) {
    
    const fetcher = useFetcher();
    const actionData = useActionData<typeof action>();
    const [open, setOpen] = useState(false);
    const isSubmitting = fetcher.state === 'submitting';

    // Prefer fetcher response (when using fetcher.Form), fall back to route action data
    const responseError = (fetcher.data as any)?.error ?? (actionData as any)?.error;
    const errorMessage = responseError?.detail?.toString?.() ?? responseError?.toString?.() ?? null;

    // Close dialog and refresh on success
    useEffect(() => {
        const responseData = (fetcher.data as any)?.data ?? (actionData as any)?.data;
        const responseErrorLocal = (fetcher.data as any)?.error ?? (actionData as any)?.error;
        if (responseErrorLocal) return; // keep dialog open so user can fix
        if (responseData) {
            // notify, close dialog and refresh to get latest data
            toast({ variant: 'default', title: 'Tally created', description: 'Successfully created tally transaction' });
            setOpen(false);
            // small delay to allow dialog close animation
            setTimeout(() => window.location.reload(), 300);
        }
    }, [fetcher.data, actionData]);

    return <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger title='add tally transaction'
            className={cn(`flex items-center justify-center gap-2 rounded-lg px-3 py-2 bg-accent text-secondary`)}>
            <Svg src={icons.addIcon} width={'.9em'} />
            Add Payment
        </DialogTrigger>
        <DialogContent className="bg-secondary">
            <DialogHeader>
                <DialogTitle>Add Tally Transaction</DialogTitle>
                <DialogDescription>
                    {errorMessage && (
                        <div className="mb-3 p-3 rounded-md bg-red-50 text-red-700 text-sm">
                            {errorMessage}
                        </div>
                    )}
                    <fetcher.Form method='POST' className='text-primary text-xs flex flex-col gap-4'>
                        <fieldset className="py-4 grid sm:grid-cols-3 gap-3">
                            <FormControl as='input' id='email' name='email' labelText='Sender Email (Optional)' />
                            <FormControl as='input' id='phone_number' name='phone_number' labelText='Sender Phone (Optional)' />
                            <FormControl as='input' id='name' name='name' labelText='Sender Name' />
                            <Select label='Contest' name="contest_id">
                                <option value=''>Select a contest</option>
                                {(ongoingContests ?? []).map(c => 
                                    <option value={c._id}>{c.name}</option>
                                )}
                            </Select>
                            <Select label='Bank Status' name="gateway_status">
                                <option value='successful'>Successful</option>
                                <option value='pending'>Pending</option>
                                <option value='failed'>Failed</option>
                            </Select>
                            <FormControl as='input' id='contestant_code' name='contestant_code' labelText='Contestant Code' />
                            {/* <FormControl as='input' type='number' id='vote' name='vote' labelText='Vote' min={0} defaultValue={0} /> */}
                            <FormControl as='input' type='number' id='amount' name='amount' labelText='Amount (NGN)' min={0} defaultValue={0} />
                            <FormControl as='input' type='number' id='fee' name='fee' labelText='Fee (NGN)' min={0} defaultValue={0} />
                            <FormControl as='input' id='bank_ref' name='bank_ref' labelText='Transaction Reference' />

                        </fieldset>
                        <div className='flex justify-end gap-6'>
                            <Cta element='button' type='submit' disabled={isSubmitting} className='px-3 py-2 rounded-md font-bold min-w-[90px] text-white' aria-busy={isSubmitting}>
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </Cta>
                        </div>
                    </fetcher.Form>
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
}




export default function TallyVotes() {
    const { data, error, authRequired, ongoingContests } = useLoaderData<typeof loader>()

    let transactions = data?.items ?? [];
    let lastKey = data?.last_key_id
    let pageSize = data?.items_per_page ?? 10;
    let firstKey = data?.first_key_id;

    return (
        <main className='w-full overflow-y-auto p-6'>
            <section className="flex max-sm:flex-col gap-10 justify-between sm:items-center mb-6 sm:mb-16">
                <h1 className="text-2xl font-black text-primary">Tally Votes</h1>
                <AddTallyDialog ongoingContests={ongoingContests} />
            </section>
            <section className='my-12'>
                <TallyTransactionsTable data={transactions} lastKey={lastKey ?? ""} pageSize={pageSize} firstKey={firstKey ?? ""} />
            </section>
        </main>
    )
}


import { ColumnDef } from '@tanstack/react-table'
import Checkbox from '~/components/reusables/Checkbox'
import DataTable from '~/components/reusables/DataTable'
import { DataTableColumnHeader } from '~/components/reusables/DataTableColumnHeader'
import Pagination from '~/components/reusables/Pagination'
import StatusTag from '~/components/reusables/StatusTag'
import { formatDate } from '~/lib/dates.utils'
import { numberFormatter } from '~/lib/numbers.utils'
import TallyTableActions from "~/components/admin/transactions/TallyTableActions"
import { TallyTransaction } from "~/services/admin/types/admin.interface"
import { contestRepo } from "~/services/contest/contest.server";
import { IContestWStage } from "~/services/contest/types/contest.interface";


const numberFormatterOptions: Intl.NumberFormatOptions = { style: 'currency', currency: 'NGN' }
const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
}
const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
}

const columns: ColumnDef<TallyTransaction>[] = [
    {
        id: "select",
        header: ({ table }) => (<div className="flex place-content-center">
            <Checkbox className='h-4 w-4' aria-label="Select all"
                checked={table.getIsAllPageRowsSelected()}
                onCheckedChange={(value) => { table.toggleAllPageRowsSelected(!value) }}
            />
        </div>),
        cell: ({ row }) => (<div className="flex place-content-center">
            <Checkbox className='h-4 w-4' aria-label="Select row"
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!value)}
            />
        </div>)
    },
    {
        accessorKey: 'reference',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="trx ref" />
        ),
    }, {
        accessorKey: 'customer',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="sender" />
        ),
        cell: ({getValue}) => {
            const customer = getValue<TallyTransaction['customer']>()
            return customer.email
        }
    }, {
        accessorKey: 'contestant_code',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="code" />
        ),
    }, {
        accessorKey: 'number_of_votes',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="votes" />
        ),
    }, {
        accessorKey: 'amount',
        header: ({ column }) => (
            <DataTableColumnHeader className='whitespace-nowr' column={column} title="amount" />
        ),
        cell: ({ getValue }) => (numberFormatter(getValue<number>(), numberFormatterOptions))
    }, {
        accessorKey: 'app_fee',
        header: ({ column }) => (
            <DataTableColumnHeader className='whitespace-nowr' column={column} title="fee" />
        ),
        cell: ({ getValue }) => (numberFormatter(getValue<number>(), numberFormatterOptions))
    }, {
        accessorKey: 'created_at',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="date" />
        ),
        cell: ({ getValue }) => (
            <span>
                <span className='block'>{formatDate(new Date(getValue<string>()), dateOptions)}</span>
                <span className='block'>{formatDate(new Date(getValue<string>()), timeOptions)}</span>
            </span>
        )
    }, {
        accessorKey: 'payment_status',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="status" />
        ),
        cell: ({ getValue }) => {
            const status = getValue<TallyTransaction['payment_status']>()
            const color = status === 'PENDING'
                ? 'yellow' : status === 'SUCCESS'
                    ? 'green' : status === 'REFUNDED'
                        ? 'red' : 'gray'
            return <StatusTag status={status} color={color} />
        }
    }
]

export  function TallyTransactionsTable({ data, lastKey, pageSize, firstKey }: { data: TallyTransaction[], lastKey: string, firstKey: string, pageSize: number }) {
    return (
        <>
            <div className="w-full overflow-x-auto">
                <DataTable data={data} columns={columns} className='text-xs' TableActions={TallyTableActions} />
            </div>
            <Pagination lastKey={lastKey} pageSize={pageSize} firstKey={firstKey} />
        </>
    )
}
