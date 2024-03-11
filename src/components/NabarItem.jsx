'use client'

import Link from "next/link";
import { useSearchParams } from 'next/navigation'

const NavbarItem = ({ title, param }) => {
    
    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')

    return (
        <Link href={`/?genre=${ param }`} 
            className={`hover:text-gray-600 font-semibold ${ genre === param ? 'underline underline-offset-8 decoration-4 decoration-amber-500' : '' }`}>
            <p className="uppercase hidden sm:inline text-sm">{ title }</p>
        </Link>
    );
}
 
export default NavbarItem;