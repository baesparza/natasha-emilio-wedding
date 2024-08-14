export function Indications() {
    return <>
        <section className="fade-in-container mx-auto w-full max-w-2xl px-8 py-32">
            <h2 className="text-oliveGreen text-4xl text-center text-balance ">Aquí te dejamos unas indicaciones <span className="text-black-dark">para tu asistencia...</span></h2>

            <div className="mt-12 flex flex-row gap-x-10 gap-y-20 flex-wrap justify-center">

                <div className="w-full max-w-64 flex flex-col gap-3">
                    <h3 className="text-center text-2xl font-baskervville">Child Free</h3>
                    <p className=" text-center text-lg font-light">Nos gustan tanto los niños que no queremos que se desvelen ni pasen frío, <b className="font-semibold uppercase text-sm">solo adultos por favor</b>.</p>
                </div>

                <div className="w-full max-w-64 flex flex-col gap-3">
                    <h3 className="text-center text-2xl font-baskervville">Invitados</h3>
                    <p className=" text-center text-lg font-light">Queremos celebrar nuestro amor con un aforo limitado, <b className="font-semibold uppercase text-sm"> la invitación es exclusiva para ti</b>.</p>
                </div>

                <div className="w-full max-w-90 flex flex-col gap-3">
                    <h3 className="text-center text-2xl font-baskervville">Dress Code</h3>
                    <p className=" text-center text-lg font-light">Mira la paleta de colores</p>
                    <div className="flex flex-row gap-6  justify-center flex-wrap">
                        <div className="group flex flex-col items-center gap-2">
                            <div className=" w-20 aspect-square bg-lavender rounded-full shadow-lg transition-shadow group-hover:shadow-xl" />
                            <small className=" text-sm">Lavanda</small>
                        </div>

                        <div className="group flex flex-col items-center gap-2">
                            <div className=" w-20 aspect-square bg-rosewood rounded-full shadow-lg transition-shadow group-hover:shadow-xl" />
                            <small className=" text-sm">Palo de Rosa</small>
                        </div>

                        <div className="group flex flex-col items-center gap-2">
                            <div className=" w-20 aspect-square bg-beige rounded-full shadow-lg transition-shadow group-hover:shadow-xl" />
                            <small className=" text-sm">Beige</small>
                        </div>

                        <div className="group flex flex-col items-center gap-2">
                            <div className=" w-20 aspect-square bg-oliveGreen rounded-full shadow-lg transition-shadow group-hover:shadow-xl" />
                            <small className=" text-sm">Verde Olivo</small>
                        </div>
                    </div>

                    <a className="flex flex-row gap-1 items-center justify-center w-full text-black-light font-semibold uppercase text-sm translate-x-0 transition-transform hover:translate-x-2" href="https://www.canva.com/design/DAGM1ibWDwM/bwtkCN3ETfjT66La7QiXXQ/edit" target="_blank" rel="noopener noreferrer"> <span className="material-symbols-outlined text-base">arrow_forward</span>Mira los siguientes ejemplos</a>
                </div>
            </div>
        </section>

        <section className="group w-full max-w-90 flex flex-col gap-4 bg-lavender py-10 px-8">
            <p className="font-baskervville text-center text-2xl text-white font-light underline underline-offset-4 decoration-white text-balance">Estamos reservando el blanco y parecidos solo para la novia.</p>
            <div className="flex flex-row gap-4 justify-center flex-wrap">
                <div className=" w-24 aspect-square  bg-white-bride rounded-full shadow-lg transition-shadow group-hover:shadow-xl" />
            </div>
        </section>
    </>;
}