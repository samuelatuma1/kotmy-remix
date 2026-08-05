import { ActionFunctionArgs, json, LoaderFunctionArgs, redirect } from "@remix-run/node"
import { Link, useLoaderData, useNavigate } from "@remix-run/react"
import { useEffect } from "react"
import { icons } from "~/assets/icons";
import Svg from "~/components/reusables/Svg";
import { useUserManager } from "~/lib/store/store_managers/tokenManager"
import { clearAuthSession } from "~/lib/session.server";

export async function loader({ request }: LoaderFunctionArgs) {
    const { headers } = await clearAuthSession({ request });
    return null;
}


function useLogoutController() {

    const { deleteUserStoreManager } = useUserManager();

    useEffect(() => {
        deleteUserStoreManager();

    }, [deleteUserStoreManager]);
}

export default function Logout() {
    const data = useLoaderData<typeof loader>();
    useLogoutController();
    return (
    <main className="h-dvh bg-secondary p-4 flex flex-col">
            <Link to={'/'} aria-label='home'>
                <Svg src={icons.logoIcon} className='w-14 h-14 sm:w-16 sm:h-16 cursor-pointer' />
            </Link>

            <main className="h-dvh bg-secondary p-4 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-satoshi-bold text-center">You have been logged out</h1>
            <Link to={'/login'} className="mt-4 text-center underline">Login again</Link>
        </main>
    </main>)
}
