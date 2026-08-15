import { NavLink, useLocation } from '@remix-run/react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion'
import { icons } from '~/assets/icons'
import Svg from '../reusables/Svg'
import Toggletip from '../reusables/ToggleTip'
import { cn } from '~/lib/utils'
import { rolesEnum, useUserManager } from '~/lib/store/store_managers/tokenManager'
import { useEffect, useState } from 'react'
import { UserAtom } from '~/lib/store/atoms/token'

const navs = [
    { label: 'Home', icon: icons.adminHomeIcon, url: '/admin/overview', acceptedRoles: [] },
    { label: 'Admin Accounts', icon: icons.adminUsersIcon, url: '/admin/accounts' , acceptedRoles: [rolesEnum['manage user']] },
    { label: 'User Accounts', icon: icons.adminUsersIcon, url: '/admin/accounts/allusers' , acceptedRoles: [rolesEnum['manage user']] },
    { label: 'Tournaments', icon: icons.adminTournamentIcon, url: '/admin/tournaments', acceptedRoles: []  },
    { label: 'Contests', icon: icons.adminContestIcon, url: '/admin/contests', acceptedRoles: []  },
]

const navsWSubs = [
    {
        label: 'Transactions', icon: icons.adminFinanceIcon, subitems: [
            { label: 'Tally Votes', url: 'transactions/tally-votes', acceptedRoles: []  },
            { label: 'Contest Registrations', url: 'transactions/contest-registrations' , acceptedRoles: [] },
            { label: 'Income History', url: 'transactions/income-history', acceptedRoles: []  },
             { label: 'Affiliate Leaderboard', url: 'transactions/affiliate-board', acceptedRoles: [] },
        ]
    },
    {
        label: 'Partners', icon: icons.adminFinanceIcon, acceptedRoles: [], subitems: [
            { label: 'Show Partners', url: 'partners', acceptedRoles: [] },
            { label: 'Partners Settlements', url: 'partners/settlements', acceptedRoles: [] },
            { label: 'Partners Orders', url: 'partners/orders', acceptedRoles: [] }
        ]
    },
]

export default function AdminNavigation({ show }: { show: boolean }) {
    const { getUserStoreManager, hasAcceptedRole} = useUserManager();
    const userRoles = getUserStoreManager()?.roles.map(r => r.toLowerCase()) ?? []
    const [user, setUser] = useState<UserAtom | null>(null)
    const userRolesSet = new Set(userRoles)
    useEffect(() => {
        setUser(getUserStoreManager())
    }, [getUserStoreManager])
   
    const { pathname } = useLocation()
    function isSublinkActive(url: string) { return new RegExp(url, 'i').test(pathname) }
    const mainComponent = (
        <div className="flex justify-between items-center border border-brand-grey rounded-lg p-2 text-sm cursor-pointer line-clamp-1 hover:outline outline-1 outline-brand-pink">
            System default
            <Svg src={icons.arrowDownIcon} />
        </div>)
    return (show
        ? <header className='bg-white border-r border-brand-grey hidden sm:flex flex-col justify-between min-w-[280px]'>
            <nav className='py-6'>
                <span className='inline-block mb-2 px-6 py-3 font-satoshi-bold'>Navigation Menu</span>
                <ul className='grid gap-2 font-bold'>
                    {navs.map(navItem => (
                        <li key={navItem.label}><NavLink to={navItem.url}
                            className={  ({ isActive }) => `${isActive ? 'text-brand-pink bg-secondary border-brand-pink' : 'border-transparent text-brand-charcoal'} flex gap-3 items-center px-6 py-3 font-semibold border-l-4 hover:bg-secondary ` +  `${!hasAcceptedRole(user, (navItem.acceptedRoles ?? []) as unknown as [] ) ? " hidden " : ""}` }
                        >
                            <Svg src={navItem.icon} />{navItem.label}
                        </NavLink></li>
                    ))}
                </ul>
                <Accordion type="single" collapsible className='w-full mt-2'>
                    {navsWSubs.map(item => (
                        <AccordionItem value={item.label} key={item.label} className='group'>
                            <AccordionTrigger
                                className={cn('border-l-4 border-transparent group w-full flex gap-3 items-center justify-between px-6 py-3 font-semibold hover:bg-secondary', {
                                    'text-brand-pink bg-secondary border-brand-pink': isSublinkActive(item.label)
                                })}>
                                <span className="flex gap-3 items-center">
                                    <Svg src={item.icon} />
                                    {item.label}
                                </span>
                                <Svg src={icons.arrowDownIcon} className='group-[[data-state=open]]:rotate-180 transition-transform duration-200' />
                            </AccordionTrigger>
                            <AccordionContent>
                                <ul className='list-disc list-inside p-3'>
                                    {item.subitems.map(subitem => (
                                        <li key={subitem.label} className='py-2 px-6 hover:bg-secondary rounded-lg has-[.active]:font-semibold has-[.active]:bg-secondary'>
                                            <NavLink to={subitem.url}
                                                className={({ isActive }) => `${isActive ? 'active' : ''}` +  `${!hasAcceptedRole(user, (subitem.acceptedRoles ?? []) as unknown as [] ) ? " hidden " : ""}` }>
                                                {subitem.label}
                                            </NavLink>
                                        </li>
                                    ))}

                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </nav>
            <aside className='border-t  px-6 py-3'>
                <span className='flex items-center gap-1 mb-2 font-satoshi-bold'>
                    <Svg src={icons.themeIcon} />
                    Theme
                </span>
                <Toggletip mainComponent={mainComponent}
                    childContainerClass="bottom-[110%] left-0 bg-white p-2 border border-brand-grey text-xs whitespace-nowrap">
                    <span className='p-2 flex items-center gap-2 hover:bg-secondary rounded-lg font-satoshi-medium'>System default</span>
                    <span className='p-2 flex items-center gap-2 hover:bg-secondary rounded-lg font-satoshi-medium'>Light</span>
                    <span className='p-2 flex items-center gap-2 hover:bg-secondary rounded-lg font-satoshi-medium'>Dark</span>
                </Toggletip>
            </aside>
        </header >
        : null
    )
}
