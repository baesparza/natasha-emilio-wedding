export function BankAccount() {
    return <section className="fade-in-container mx-auto w-full max-w-4xl px-8 pt-32 pb-20">

        <h2 className="text-rosewood text-4xl text-center text-balance">
            Si quieres hacernos un regalo <span className="text-black-dark">estamos agradecidos</span>
        </h2>

        <h3 className="mt-12 text-black text-center w-full text-lg lg:text-xl text-balance font-light">
            Recuerda que lo importante es que vengas con ilusión, alegría y ganas de pasarlo bien.
        </h3>

        {/* card */}
        <div className="relative mt-10">
            <div className=" mx-auto relative max-w-[30rem] h-100 min-h-64 flex items-center justify-center">
                {/* Underlying Gradient Div */}
                <div className="absolute z-0 w-full h-full inset-0 rounded-lg bg-gradient-to-br from-oliveGreen to-rosewood" />

                <div className="absolute z-10 w-[calc(100%-10px)] h-[calc(100%-10px)] inset-[5px] shadow-xl py-20 px-4 bg-white rounded-lg flex flex-col items-center justify-center ">
                    <h2 className="text-xl font-medium text-balance text-center">
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
                            <b>Natasha Beltrán</b>
                            <p>
                                Cl: 1104832934
                            </p>
                        </div>

                        <div className="text-3xl font-baskervville text-rosewood">
                            &
                        </div>

                        <div className="text-center">
                            <b>Emilio Sánchez</b>
                            <p>
                                Cl: 1104633373
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* assets */}
        </div>
            <img className="w-full max-w-sm -z-10 absolute left-0 top-20 md:top-auto md:bottom-0 scale-x-[-1] rotate-90 md:-translate-x-1/2 blur md:blur-none opacity-20 md:opacity-100" src="/flowers/lavender.png" alt="" />
    </section>;
}