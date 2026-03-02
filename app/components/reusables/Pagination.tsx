import Svg from './Svg'
import { icons } from '~/assets/icons'
import { useLocation, useNavigate } from '@remix-run/react'
import { useState } from 'react';

export default function Pagination({ className = '', pageSize = 20, lastKey, firstKey }: { className?: string, pageSize?: number, lastKey?: string | null, firstKey?: string | null}) {
    const navigate = useNavigate();
    const location = useLocation();

    const [rows, setRows] = useState<number>(pageSize)
    const updateSearch = (newParams: Record<string, string | null>) => {
        const url = new URL(window.location.href);
        Object.entries(newParams).forEach(([k, v]) => {
            if (v === null || v === "") {
                url.searchParams.delete(k);
            } else {
                url.searchParams.set(k, v);
            }
        });
       
        // navigate to same pathname with updated search params to trigger loader
        navigate(`${url.pathname}${url.search}`, { replace: false });
    }

    const onNext = () => {
        updateSearch({ page_size: String(rows), last_key_id: lastKey ?? '', direction: "next"  });
    }

    const onPrev = () => {
        updateSearch({ first_key_id: firstKey ?? "", page_size: String(rows), direction: "previous" });
    }

    return (

                    
        <div className="max-sm:flex-col max-xs:text-xs sm:w-4/5 mx-auto flex gap-2 justify-between items-center my-5">
            <label className="flex gap-2">Rows per page
                <input type="number" name="rows" id="rows" className="w-12 rounded-md border" defaultValue={rows} onChange={(e) => setRows(parseInt(e.target.value))} />
            </label>
            <div className={`flex gap-6 md:gap-8 justify-center items-center font-semibold ${className}`}>
                <button onClick={onPrev} className="flex gap-1 items-center rounded py-1 px-2 hover:outline outline-primary">
                    <Svg src={icons.arrowPrevIcon} /> Prev
                </button>
                <span className="whitespace-nowrap">Page controls</span>
                <button onClick={onNext} className="flex gap-1 items-center rounded py-1 px-2 hover:outline outline-primary">
                    Next <Svg src={icons.arrowNextIcon} />
                </button>
            </div>
        </div>
        
    )
}
