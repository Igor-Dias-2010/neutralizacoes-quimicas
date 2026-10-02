import Link from "next/link"

export default function Navbar() {
    return (
        <div>
            <nav>
                <Link href={"#acidos"}>Ácidos</Link>
                <Link href={"#bases"}>Bases</Link>
                <Link href={"#oxidos"}>Óxidos</Link>
                <Link href={"#sais"}>Sais</Link>
                <Link href={"#ph"}>Ph</Link>
                <Link href={"#extrato-de-repolho-roxo"}>Extrato de repolho roxo</Link>
                <Link href={"#indicadores-acido-base"}>Indicadores ácido-base</Link>
                <Link href={"#neutralizacao"}>Neutralização</Link>
            </nav>
        </div>
    )
}