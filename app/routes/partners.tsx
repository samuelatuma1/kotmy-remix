import type { MetaFunction } from "@remix-run/node"
import { Outlet, useLocation } from "@remix-run/react"
import { useEffect, useState } from "react"
import Cta from "~/components/reusables/Cta"
import PartnerPrimaryHeader from "~/components/partner/PartnerPrimaryHeader"
import PartnerMobileHeader from "~/components/partner/PartnerMobileHeader"
import PartnerMobileNavigation from "~/components/partner/PartnerMobileNavigation"
import PartnerNavigation from "~/components/partner/PartnerNavigation"

export const meta: MetaFunction = () => {
    return [
        { title: "KOTMY | Admin" },
        { name: "description", content: "KOTMY Admin application" },
    ]
}

function Layout({ children }: { children: React.ReactNode }) {
    const [showNav, setShowNav] = useState(false)
    useEffect(() => {
        setShowNav(window.innerWidth >= 640)
    }, [])
    return (<div className="bg-tertiary text-admin-pry">
        <PartnerPrimaryHeader toggleNav={() => { setShowNav(prev => !prev) }} />
        <PartnerMobileHeader toggleNav={() => { setShowNav(prev => !prev) }} />
        <PartnerMobileNavigation onClose={() => { setShowNav(false) }} show={showNav} />

        <div className="sm:flex sm:h-[calc(100vh-85px)]"> 
            {/* PartnerNavigation must be contained within a div that allows it to occupy the full height */}
            <PartnerNavigation show={showNav} />
            
            {/* ADDED: flex-grow and overflow-y-auto to the content area so only the content scrolls */}
            <div className="flex-grow overflow-y-auto">
                {children}
            </div>
        </div>
    </div>)
}

export default function PartnerLayout() {
    return <Layout><Outlet /></Layout>
}

export function ErrorBoundary() {
    const { pathname } = useLocation()
    let heading = 'Something went wrong'
    let message = `Apologies, something went wrong on our end. Please try again.`
    return <Layout>
        <div className="w-full max-sm:h-[calc(100dvh-73px)] p-5 m-auto lg:max-w-3xl grid place-content-center text-center gap-5">
            <h2 className="text-xl font-bold text-red-500">{heading}</h2>
            <p>{message}</p>
            <Cta element="link" to={pathname} className="px-4 py-1 rounded-md">Reload page</Cta>
            <Cta element="link" to="/partner/overview" className="px-4 py-1 rounded-md">Back to Partner Home</Cta>
        </div>
    </Layout>
}