export function EventInformation() {
    return <section className="fade-in-container relative ">
        <div className="relative z-10 mx-auto w-full container px-8 pt-32 flex flex-col md:flex-row gap-8 lg:gap-16">
            {/* info */}
            <div className="w-full md:w-3/5 flex flex-col gap-10 justify-center">
                <h2 className="text-black-dark text-4xl text-balance italic text-center mb-20 lg:text-left lg:mb-10">
                    &quot;Amamos la vida, no por el habito de vivir sino por el habito de amar&quot;
                    <span className="block text-oliveGreen text-2xl text-balance ">
                        Natasha & Emilio
                    </span>
                </h2>

                <h2 className="text-black-dark text-4xl text-balance text-center lg:text-left">
                    Nos complace invitarte <span className="text-oliveGreen">a nuestra boda</span>
                </h2>

                <h3 className="text-black w-full text-lg lg:text-xl text-balance font-light text-center lg:text-left">
                    Por favor no llegues tarde, y planifica tu llegada, habrá estacionamiento cerca para que puedas dejar tu vehículo.
                </h3>

                <br />

                <div className="flex flex-row gap-4 items items-start">
                    <p className="grow flex flex-col gap-1">
                        <span className="flex flex-row gap-1 items-center justify-center">
                            {/* <span className="material-symbols-outlined text-lg text-oliveGreen">location_on</span> */}
                            <b className="font-baskervville font-semibold uppercase text-base text-oliveGreen">Lugar</b>
                        </span>
                        <span className="text-black-light text-center text-sm lg:text-base ">El Sauce, Landangui <br /> via a Malacatos</span>
                    </p>

                    <div className="shrink-0 h-20 w-0.5 rounded bg-rosewood self-center" />

                    <p className="grow flex flex-col gap-1">
                        <span className="flex flex-row gap-1 items-center justify-center">
                            {/* <span className="material-symbols-outlined text-lg text-oliveGreen">event</span> */}
                            <b className="font-baskervville font-semibold uppercase text-base text-oliveGreen">Fecha</b>
                        </span>
                        <span className="text-black-light text-center text-sm lg:text-base">19 de octubre, 2024</span>
                    </p>

                    <div className="shrink-0 h-20 w-0.5 rounded bg-rosewood self-center" />

                    <p className="grow flex flex-col gap-1">
                        <span className="flex flex-row gap-1 items-center justify-center">
                            {/* <span className="material-symbols-outlined text-lg text-oliveGreen">watch</span> */}
                            <b className="font-baskervville font-semibold uppercase text-base text-oliveGreen">Hora</b>
                        </span>
                        <span className="text-black-light text-center text-sms lg:text-base">Ceremonia: 4h00 PM <br /> Recepción: 5h30 PM</span>
                    </p>
                </div>
            </div>

            {/* image */}
            <div className="w-full md:w-2/5">
                {/* carrusel */}
                <a className="relative block bg-lavender w-full aspect-square md:h-full lg:aspect-square overflow-hidden group rounded-3xl" href="https://maps.app.goo.gl/hTtNPkG9gy8kPds87" target="_blank" rel="noopener noreferrer">
                    {/* image */}
                    <img src="/assets/mapa.png" alt="Mapa ubicación" className="absolute z-0 inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform" />

                    <div className="absolute z-10 inset-0 w-full h-full bg-gradient-to-b from-white to-black-light opacity-5" />

                    {/* button */}
                    <div className="absolute z-20 bottom-4 left-4 bg-white px-3 rounded-lg transition-all shadow-lg group-hover:shadow-sm group-hover:translate-y-1 text-rosewood group-hover:text-black-light" >
                        <span className="flex flex-row gap-1 items-center justify-start font-semibold uppercase ">
                            <span className="material-symbols-outlined text-base">link</span>
                            <span className="text-sm">Ver en Google Maps</span>
                        </span>
                    </div>
                </a>
            </div>
        </div>

        {/* assets */}
        <img className="z-0 absolute left-0 top-12 w-1/2 md:w-1/3 lg:w-1/4 max-w-64s blur opacity-20 md:opacity-30" src="/flowers/top-right-leaf.png" alt="" />
    </section>;
}