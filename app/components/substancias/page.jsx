import Acidos from "../acidos/acidos"
import Bases from "../bases/bases"
import ExtratoRepolhoRoxo from "../extrato-de-repolho-roxo/extrato"
import IndicadoresAcidoBase from "../indicadores-acido-base/indicadores"
import Neutralizacao from "../neutralizacao/neutralizacao"
import Oxidos from "../oxidos/oxidos"
import Ph from "../ph/ph"
import Sais from "../sais/sais"
import Navbar from "@/app/navbar"

export default function Substancias() {
    return (
        <div>
            <Navbar />
            <h1>Substâncias</h1>
            <section className="components-container">
                <Acidos />
                <Bases />
                <Oxidos />
                <Sais />
                <Ph />
                <Neutralizacao />
                <ExtratoRepolhoRoxo />
                <IndicadoresAcidoBase />
            </section>
        </div>
    )
}