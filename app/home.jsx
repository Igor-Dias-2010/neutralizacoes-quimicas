import Navbar from "./navbar"
import Acidos from "./components/acidos/acidos"
import Bases from "./components/bases/bases"
import ExtratoRepolhoRoxo from "./components/extrato-de-repolho-roxo/extrato"
import IndicadoresAcidoBase from "./components/indicadores-acido-base/indicadores"
import Neutralizacao from "./components/neutralizacao/neutralizacao"
import Oxidos from "./components/oxidos/oxidos"
import Ph from "./components/ph/ph"
import Sais from "./components/sais/sais"

export default function Home() {
    return (
        <div>
            <Navbar />
            <h1>Neutralizações Químicas</h1>
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