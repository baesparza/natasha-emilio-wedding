export function BankAccount() {
    return <section className="mx-auto w-full max-w-4xl px-8 pt-32">

        <h2 className="text-rosewood text-4xl text-center text-balance">
            Si quieres hacernos un regalo <span className="text-black-dark">estamos agradecidos</span>
        </h2>

        <h3 className="mt-12 text-black text-center w-full text-lg lg:text-xl text-balance font-light">
            Recuerda que lo importante es que vengas con ilusión, alegría y ganas de pasarlo bien.
        </h3>

        <div className="mx-auto mt-10 relative max-w-[30rem] aspect-video flex items-center justify-center">
            {/* Underlying Gradient Div */}
            <div className="absolute w-full h-full inset-0 rounded-lg bg-gradient-to-br from-oliveGreen to-rosewood" />

            <div className="shadow-xl relative w-full h-full m-[5px] p-4 bg-white rounded-lg flex flex-col items-center justify-center ">
                <h2 className="text-xl font-medium">
                    Cta Ahorros Banco de Guayaquil
                </h2>

                <p className="mt-4 text-lg">
                    Nro Cuenta: <b>0049020907</b>
                </p>
                <small className="mt-1 text-base">
                    Cta compartida
                </small>

                <div className="mt-5 flex items-center justify-center gap-4">
                    <div className="text-center">
                        <b>Natasha Beltran</b>
                        <p>
                            Cl: 1104832934
                        </p>
                    </div>

                    <div className="text-3xl font-baskervville text-rosewood">
                        &
                    </div>

                    <div className="text-center">
                        <b>Emilio Sanchez</b>
                        <p>
                            Cl: 1104633373
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>;
}