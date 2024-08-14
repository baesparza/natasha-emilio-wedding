export function EventInformation() {
    return <section className="fade-in-container relative ">
        <div className="relative z-10 mx-auto w-full container px-8 pt-40 flex flex-col md:flex-row gap-8 lg:gap-16">
            {/* info */}
            <div className="w-full md:w-1/2 flex flex-col gap-6 justify-center">
                <h2 className="text-oliveGreen text-4xl text-balance ">Nos complace invitarte <span className="text-black-dark">a nuestra boda,</span></h2>

                <h3 className="text-black text-left w-full text-lg lg:text-xl text-balance font-light">
                    Te esperaremos en nuestro lugar especial, por favor no llegues tarde, y planifica tu llegada, habrá estacionamiento cerca para que puedas dejar tu vehículo.
                </h3>

                <p className="text-lg flex flex-col gap-1">
                    <span className="flex flex-row gap-1 items-center ">
                        <span className="material-symbols-outlined text-lg text-oliveGreen">location_on</span>
                        <b className="font-semibold uppercase text-base text-oliveGreen">Lugar</b>
                    </span>
                    <span className="text-black-light flex-grow ">Landangui, via a Vilcabamba, Loja - Ecuador</span>
                </p>
                <p className="text-lg flex flex-col gap-1">
                    <span className="flex flex-row gap-1 items-center ">
                        <span className="material-symbols-outlined text-lg text-oliveGreen">event</span>
                        <b className="font-semibold uppercase text-base text-oliveGreen">Fecha</b>
                    </span>
                    <span className="text-black-light flex-grow">18 de octubre, 2024</span>
                </p>
            </div>

            {/* image */}
            <div className="w-full md:w-1/2">
                {/* carrusel */}
                <a className="relative block bg-lavender w-full aspect-square md:h-full lg:aspect-square overflow-hidden group rounded-md" href="https://maps.app.goo.gl/38Djo53GSzVrhwQZA" target="_blank" rel="noopener noreferrer">
                    {/* image */}
                    <img src="/assets/mapa.png" alt="Mapa ubicación" className="absolute z-0 inset-0 w-full h-full object-cover group-hover:scale-125 transition-transform" />

                    <div className="absolute z-10 inset-0 w-full h-full bg-gradient-to-b from-white to-black-light opacity-5" />

                    {/* button */}
                    <div className="absolute z-20 bottom-4 left-4 bg-white px-2 rounded-lg transition-all shadow-lg group-hover:shadow-sm group-hover:translate-y-1 text-rosewood group-hover:text-black-light" >
                        <span className="flex flex-row gap-1 items-center justify-start font-semibold uppercase text-sm ">
                            <span className="material-symbols-outlined text-lg">link</span>
                            <span>Ver en Google Maps</span>
                        </span>
                    </div>
                </a>
            </div>
        </div>

        {/* assets */}
        <img className="z-0 absolute left-0 top-0 w-1/2 md:w-1/3 lg:w-1/4 max-w-64s blur opacity-30 md:opacity-50" src="/flowers/top-right-leaf.png" alt="" />
    </section>;
}