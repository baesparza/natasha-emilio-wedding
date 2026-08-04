
export function EventInformation() {

    return <section className="fade-in-container relative ">
        <div className="relative z-10 mx-auto w-full container px-8 pt-32 flex flex-col md:flex-row gap-8 lg:gap-16">
            {/* info */}
            <div className="w-full md:w-3/5 flex flex-col gap-10 justify-center items-center">
                <h2 className="text-black-light text-lg md:text-2xl text-balance italic text-center ">
                    &quot;Amamos la vida, no por el hábito de vivir sino por el hábito de amar&quot;
                </h2>

                <h2 className="block text-oliveGreen text-4xl text-balance text-center font-baskervville italic">
                    <span className="text-lavender">NATASHA &</span> EMILIO
                </h2>

                <h2 className="text-black-dark text-2xl text-balance text-center">
                    Nos complace invitarte <span className="text-oliveGreen">a nuestra boda</span>
                </h2>

                <div className="w-full flex flex-col md:flex-row gap-6 items items-center md:text-start">
                    <p className="grow flex flex-col gap-1">
                        <span className="flex flex-row gap-1 items-center justify-center">
                            {/* <span className="material-symbols-outlined text-lg text-oliveGreen">location_on</span> */}
                            <b className="font-baskervville font-semibold uppercase text-lg text-oliveGreen">Lugar</b>
                        </span>
                        <span className="text-black-light text-center text-sm lg:text-base ">El Sauce, Landangui <br /> via a Malacatos</span>
                    </p>

                    <div className="hidden md:block shrink-0 h-20 w-0.5 rounded bg-rosewood self-center" />

                    <p className="grow flex flex-col gap-1">
                        <span className="flex flex-row gap-1 items-center justify-center">
                            {/* <span className="material-symbols-outlined text-lg text-oliveGreen">event</span> */}
                            <b className="font-baskervville font-semibold uppercase text-lg text-oliveGreen">Fecha</b>
                        </span>
                        <span className="text-black-light text-center text-sm lg:text-base">19 de octubre, 2024</span>
                    </p>

                    <div className="hidden md:block shrink-0 h-20 w-0.5 rounded bg-rosewood self-center" />

                    <p className="grow flex flex-col gap-1">
                        <span className="flex flex-row gap-1 items-center justify-center">
                            {/* <span className="material-symbols-outlined text-lg text-oliveGreen">watch</span> */}
                            <b className="font-baskervville font-semibold uppercase text-lg text-oliveGreen">Hora</b>
                        </span>
                        <span className="text-black-light text-center text-sms lg:text-base">Ceremonia: 4h00 PM <br /> Recepción: 5h30 PM</span>
                    </p>
                </div>

                <div className="flex flex-col gap-4 items-start mt-8">
                    <p className="text-center text-oliveGreen font-semibold uppercase text-sm ">
                        Te recomendamos los siguientes hospedajes
                    </p>

                    <div className="md:border-x-[0.125rem] border-rosewood mx-5 px-6 flex flex-col gap-3">
                        <p className="uppercase">
                            Hostería mi compadre, <a className="underline whitespace-nowrap" href="tel:+0991113496">099 111 3496</a>
                        </p>

                        <p className="uppercase">
                            Hotel Villa Colonial, <a className="underline whitespace-nowrap" href="tel:+0989985952">098 998 5952</a>
                        </p>
                    </div>
                </div>
            </div>

            {/* image */}
            <div className="w-full md:w-2/5">
                {/* carrusel */}
                <a className="relative block bg-lavender w-full aspect-square md:h-full lg:aspect-square overflow-hidden group rounded-2xl" href="https://maps.app.goo.gl/hTtNPkG9gy8kPds87" target="_blank" rel="noopener noreferrer">
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
        <img className="z-0 absolute left-0 top-12 w-1/2 md:w-1/3 lg:w-1/4 max-w-64s blur opacity-10 md:opacity-20" src="/flowers/top-right-leaf.png" alt="" />
    </section>;
}