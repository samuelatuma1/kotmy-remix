import { icons } from "~/assets/icons"
import Cta from "~/components/reusables/Cta"
import Svg from "~/components/reusables/Svg"
import {
    Dialog,
    DialogContent,
    DialogClose,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "~/components/reusables/Dialog"
import { cn } from "~/lib/utils"
import { useFetcher } from "@remix-run/react"
import { IContestant } from "~/services/contestant/types/contestant.interface"

export default function DeleteContestantDialog({ disabled, contestants }: { disabled: boolean, contestants: IContestant[] }) {
    const fetcher = useFetcher()
    const isSubmitting = fetcher.state !== "idle"
    const names = contestants.map(({ contestant_biodata }) =>
        `${contestant_biodata.first_name} ${contestant_biodata.last_name}`.trim()
    ).join(", ")

    return (
        <Dialog>
            <DialogTrigger disabled={disabled} title='Delete contestant'
                className={cn(`flex items-center justify-center border min-w-[32px] min-h-[32px] rounded-full border-red-500 bg-red-50 text-red-500`, {
                    'bg-slate-100 border-slate-400 text-slate-400 cursor-not-allowed': disabled
                })}>
                <Svg src={icons.trashIcon} className='w-3' />
            </DialogTrigger>
            <DialogContent className="bg-secondary">
                <DialogHeader>
                    <DialogTitle>Delete contestant</DialogTitle>
                    <DialogDescription>
                        These contestants ({names}) will be deleted from the records. Are you sure you want to proceed?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className='flex justify-end gap-6'>
                    <fetcher.Form method="post" className="w-full flex flex-col gap-4">
                        <input type="hidden" name="intent" value="delete" />
                        {contestants.map(({ _id }) => <input key={_id} type="hidden" name="contestant_ids" value={_id} />)}
                        <label htmlFor="delete-reason" className="flex flex-col gap-2 text-sm font-medium">
                            Reason for deletion
                            <textarea
                                id="delete-reason"
                                name="reason"
                                required
                                rows={3}
                                maxLength={500}
                                placeholder="Enter the reason for deleting these contestants"
                                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 font-normal outline-none focus:border-brand-pink"
                            />
                        </label>
                        <div className="flex justify-end">
                            <DialogClose asChild>
                                <Cta element='button' type='submit' kind="danger" disabled={isSubmitting || disabled} className='px-3 py-2 rounded-md font-bold min-w-[90px] text-white'>
                                    {isSubmitting ? "Submitting…" : "Proceed"}
                                </Cta>
                            </DialogClose>
                        </div>
                    </fetcher.Form>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
