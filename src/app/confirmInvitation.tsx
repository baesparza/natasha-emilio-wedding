export function ConfirmInvitation() {
    return <footer className="w-screen h-dvh flex flex-col justify-center items-center gap-12">
        <h3 className="flex flex-col justify-center font-parisienne text-6xl text-black-light w-fit">
            <span className="-ml-12"><span className="text-rosewood text-8xl">T</span><span className="-ml-2">e</span></span>
            <span className="-mt-3">invitamos</span>
            <span className="-mt-2" >a ti</span>
            <span className="-mt-2 text-2xl self-end">a nuestra boda</span>
        </h3>

        <button className="shadow-[0px_0px_5px_rgba(0,0,0,0.2)] text-black-light w-fit px-10 py-4 text-sm uppercase hover:bg-lavender hover:text-white  transition-colors duration-200">
            Confirma tu asistencia
        </button>
    </footer>;
}