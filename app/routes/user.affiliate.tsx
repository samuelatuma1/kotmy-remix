import { json, LoaderFunctionArgs, redirect } from "@remix-run/node";
import { walletRepo } from "~/services/wallet/wallet.server";
import { useLoaderData, Form, useNavigation } from "@remix-run/react"
import FormControl from "~/components/reusables/FormControl"
import Pagination from "~/components/reusables/Pagination"

export async function loader({ request }: LoaderFunctionArgs) {
    const cookieHeader = request.headers.get('Cookie') ?? '';
    if (!cookieHeader) return redirect("/login"); 
    // get paged users
    const url = new URL(request.url);
    const query: any = {};
    for (const [k, v] of url.searchParams.entries()) {
        if(v){

            query[k] = v;
        }
    }
    
    

    const walletsResponse = await walletRepo.getUserWallets(cookieHeader);
    if(!walletsResponse.data){
         return redirect("/login"); 
    }

    if(!query.wallet_id){
        query.wallet_id = walletsResponse.data[0]?.str_id
    }
    const referralBoardRes = await walletRepo.queryReferralBoard(cookieHeader, query)
    if(referralBoardRes.authRequired){
      return redirect("/login"); 
    }
    return json({ wallets: walletsResponse.data, referralBoardRes: referralBoardRes.data, query })
}

export default function AffilliateLeaderBoard() {
    const { wallets, referralBoardRes, query } = useLoaderData<typeof loader>()
    const navigation = useNavigation();
    console.log(referralBoardRes)
    return (
        <main className='w-full overflow-y-auto p-6'>
                <p className="font-semibold">Affiliates leader board</p>
            <div className="flex flex-col gap-3 sm:flex-row justify-between sm:items-center my-8">
                <Form method="get" onSubmit={(e) => {
                    // keep existing behavior: no JS changes, just visual copy
                    try {
                        // noop: existing handler intentionally left minimal
                    } catch (err) {
                        // ignore
                    }
                }} className="w-full bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-end">
                        <label className="flex flex-col text-xs text-gray-600">
                            <span className="mb-1">From</span>
                            <input id="min_created_at" name="min_created_at" type="date" className="border rounded-md px-3 py-2 bg-gray-50 outline-none" />
                        </label>

                        <label className="flex flex-col text-xs text-gray-600">
                            <span className="mb-1">To</span>
                            <input id="max_created_at" name="max_created_at" type="date" className="border rounded-md px-3 py-2 bg-gray-50 outline-none" />
                        </label>

                        <label className="flex flex-col text-xs text-gray-600">
                            <span className="mb-1">Currency</span>
                            <select id="wallet_id" name="wallet_id" className="border rounded-md px-3 py-2 bg-gray-50 outline-none">
                                {wallets.map(wallet => (<option key={wallet.str_id} value={wallet.str_id}>{wallet.wallet_currency}</option>))}
                            </select>
                        </label>

                        <div className="flex justify-end">
                            <button type="submit" disabled={navigation.state === 'submitting'} className="px-4 py-2 bg-[#312E81] text-white rounded-lg text-sm">
                                {navigation.state === 'submitting' ? 'Searching...' : 'Search'}
                            </button>
                        </div>
                    </div>
                </Form>
                
            </div>

            {/* MOBILE
            <div className="sm:hidden grid gap-4 my-6">
                {pagedUserData?.items.map(user => (<AdminCard key={user._id} user={user} />))}
                 <Pagination lastKey={pagedUserData?.last_key_id} pageSize={pagedUserData?.items_per_page} firstKey={pagedUserData?.first_key_id} />
            </div> */}

            {/* TAB/DESKTOP */}
            <div className="sm:block w-full overflow-x-auto">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="border-b border-secondary">
                            {/* {headings.map(heading => (
                                <th className="text-left capitalize font-satoshi-black p-3" key={heading}>{heading}</th>
                            ))} */}
                            {/* <th className="text-left capitalize font-satoshi-black p-3">Actions</th> */}
                            <th className="text-left capitalize font-satoshi-black p-3">Contestant Name</th>
                            <th className="text-left capitalize font-satoshi-black p-3">Contestant Code</th>
                            <th className="text-left capitalize font-satoshi-black p-3">Contest Name</th>
                            <th className="text-left capitalize font-satoshi-black p-3">Reward Earned</th>

                        </tr>
                    </thead>
                    <tbody>
                        {referralBoardRes?.items.map((referrerBoard, index) => (
                            <tr key={index} className="border-b border-secondary">
                                <td className="p-3">
                                    {
                                        `${referrerBoard.contestant_biodata.first_name} ${referrerBoard.contestant_biodata.last_name}`
                                    }
                                            
                                </td>
                                <td className="p-3">
                                    {
                                        referrerBoard.contestant_deets[0]?.code
                                    }
                                </td>
                                <td className="p-3">
                                    {
                                        referrerBoard.current_contest.name
                                    }
                                </td>
                                <td className="p-3">
                                    {
                                        `${referralBoardRes.summary?.currency} ${referrerBoard.total_earning.toLocaleString()}`
                                    }
                                </td>
                              
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="hidden sm:flex justify-between items-center my-4">
                {/* <label className="flex gap-2">Rows per page
                    <input type="number" name="rows" id="rows" className="w-10 pl-2 rounded-md border" defaultValue={10} />
                </label>
                <Pagination /> */}
                <Pagination lastKey={referralBoardRes?.last_key_id} pageSize={referralBoardRes?.items_per_page} firstKey={referralBoardRes?.first_key_id} />
            </div>
        </main>
    )
}