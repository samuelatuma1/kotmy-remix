import cn from "classnames"

export default function ToggleBtn({ onClick, on }: { on: boolean, onClick?: () => void }) {
    return (
        <button onClick={onClick} className={cn('rounded-xl p-0.5 w-[34px] flex items-center', {
            'bg-brand-pink justify-end': on,
            'bg-brand-grey': !on
        })}>
            <div className="bg-white w-4 h-4 rounded-full"></div>
        </button>
    )
}
