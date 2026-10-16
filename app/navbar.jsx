"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    return (
        <div>
            <nav>
                <Link href={"/"} className={pathname === "/" ? "ativo" : ""}>
                    Início
                </Link>
                <Link
                    href={"/components/pages/substancias"}
                    className={
                        pathname === "/components/pages/substancias"
                            ? "ativo"
                            : ""
                    }
                >
                    Substâncias
                </Link>
                <Link
                    href={"/components/pages/medicoes"}
                    className={
                        pathname === "/components/pages/medicoes" ? "ativo" : ""
                    }
                >
                    Medições
                </Link>
            </nav>
        </div>
    );
}
