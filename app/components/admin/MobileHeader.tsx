import { icons } from "~/assets/icons"
import Svg from "../reusables/Svg"
import { Link } from "@remix-run/react"

export default function MobileHeader({ toggleNav }: { toggleNav: () => void }) {
    return (
        <div className="flex sm:hidden items-center gap-4 p-4 border-b">
            <Link to={'/'} className='text-accent flex items-center whitespace-nowrap font-satoshi-black'>
                <Svg src={icons.logoIcon} width={128} height={52} />
            </Link>
            <button
                onClick={toggleNav}
                title='open Menu'
                className="ml-auto flex items-center justify-center rounded p-2 px-1 hover:outline outline-primary"
            >
                <Svg src={icons.adminHamburgerIcon} width={30} height={24} />
            </button>
        </div>
    )
}
