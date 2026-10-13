import Navbar from "@/app/navbar";
import { fotos } from "@/app/functions/fotos";
import Image from "next/image";

export default function Medicoes() {
    return (
        <div>
            <Navbar />
            <h1 className="titulo">Medições</h1>
            <section className="fotos-container">
                {fotos.map((foto, index) => {
                    return (
                        <div key={index} className="foto-item">
                            <figure>
                                <Image
                                    src={foto.src}
                                    width={300}
                                    height={600}
                                    alt={foto.alt}
                                />
                                <figcaption>{foto.legenda}</figcaption>
                            </figure>
                        </div>
                    );
                })}
            </section>
        </div>
    );
}
