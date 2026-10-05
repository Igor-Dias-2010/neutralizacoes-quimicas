"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
    const pathname = usePathname()
    return (
        <div>
            <nav>
                <Link href={"/"} className={pathname === '/' ? 'ativo' : ''}>Início</Link>
                <Link href={"/components/grupo"} className={pathname === '/components/grupo' ? 'ativo' : ''}>Grupo</Link>
                <Link href={"/components/substancias"} className={pathname === '/components/substancias' ? 'ativo' : ''}>Substâncias</Link>
            </nav>
        </div>
    )
}