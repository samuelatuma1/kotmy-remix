import { icons } from '~/assets/icons'
import { adminAvatar } from '~/assets/images'
import RoundCta from '~/components/reusables/RoundCta'
import Svg from '~/components/reusables/Svg'
import ToggleBtn from '~/components/reusables/ToggleBtn'
import Toggletip from '~/components/reusables/ToggleTip'
import { AdminUser } from '~/lib/types/user.interface'
import { cn } from '~/lib/utils'
import { ILoginResponseDTO } from '~/services/auth/types/auth.dtos'

export default function AdminUserCard({ user, className }: { user: ILoginResponseDTO, className?: string }) {
    const mainComponent = <span className=''>
        <Svg src={icons.optionsIcon} />
    </span>
    return (
        <article className={cn('border rounded-lg shadow-sm p-3 text-xs font-satoshi-medium', className)}>
            <div className="flex gap-4 mb-3">
                <p><span>{user.roles?.join(", ")}</span> | <span>{user.username}</span></p>
                <Toggletip mainComponent={mainComponent} mainContainerClass='ml-auto'
                    childContainerClass="top-[110%] right-0 bg-tertiary p-3 border border-disabled text-xs flex gap-4"
                >
                    <RoundCta icon={icons.editIcon} element="link" to={`/admin/accounts/${user._id}`} className="border-[#262626] bg-[#F7F7F8] text-primary" />
                    <RoundCta icon={icons.trashIcon} className="border-red-500 bg-red-50 text-red-500" />
                </Toggletip>
            </div>
            <div className="flex gap-4 justify-between">
                <div className='flex gap-3 items-center'>
                    <span className="p-1.5 border border-disabled rounded-full">
                        <img src={adminAvatar} alt="cartoon head" width={24} height={24} />
                    </span>
                    <span className="grid">
                        <span className='text-primary line-clamp-1'>{user.full_name}</span>
                        <span className='line-clamp-1'>{user.email}</span>
                    </span>
                </div>
                <span className="flex gap-3 items-center">
                    <span className="max-xs:hidden">{user.is_active ? 'Enabled' : 'Disabled'}</span>
                    <ToggleBtn on={user.is_active} />
                </span>
            </div>
        </article>
    )
}
