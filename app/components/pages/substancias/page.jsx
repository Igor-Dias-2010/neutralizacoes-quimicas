import Acidos from "../../substancias/acidos/acidos"
import Bases from "../../substancias/bases/bases"
import ExtratoRepolhoRoxo from "../../substancias/extrato-de-repolho-roxo/extrato"
import IndicadoresAcidoBase from "../../substancias/indicadores-acido-base/indicadores"
import Neutralizacao from "../../substancias/neutralizacao/neutralizacao"
import Oxidos from "../../substancias/oxidos/oxidos"
import Ph from "../../substancias/ph/ph"
import Sais from "../../substancias/sais/sais"
import Navbar from "@/app/navbar"

export default function Substancias() {
    return (
        <div>
            <Navbar />
            <h1 className="titulo">Substâncias</h1>
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