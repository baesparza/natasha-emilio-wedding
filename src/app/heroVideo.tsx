"use client"

function scrollToNextContent() {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
}


export function HeroVideo() {
    return <header className="fixed inset-0 z-0 w-screen h-svh">
        <div className="relative w-full h-full">
            {/* logo */}
            <img src="/assets/logo.jpg" alt="" className="fixed top-0 left-0 z-30 w-40 md:w-52 lg:w-64 h-auto mix-blend-color-dodge invert -ml-10 mt-4" />

            {/* video */}
            <video autoPlay={true} muted={true} loop={true} playsInline={true} className="z-0 absolute inset-0 w-full h-full object-cover">
                <source src="https://firebasestorage.googleapis.com/v0/b/labs-63faf.appspot.com/o/IMG_0.mp4?alt=media&token=9cb12d00-51a7-4788-afbf-40bd6b5c0917" type="video/mp4" />
            </video>

            {/* overlay */}
            <div className="z-10 absolute inset-0 w-full h-full opacity-30 bg-black" />

            {/* content over video */}
            <div className="relative z-20 flex justify-center items-center h-full w-full">
                <h1 className="fade-main-title font-parisienne text-6xl md:text-7xl lg:text-8xl text-white-bride w-full max-w-xs lg:max-w-lg px-4 py-4 text-center leading-snug">
                    Todas las bodas tienen una historia, forma parte de ella
                </h1>
            </div>

            {/* scroll */}
            <button onClick={scrollToNextContent} className="-translate-x-1/2 flex flex-col items-center justify-center  absolute text-white z-40 left-1/2 bottom-12">
                <span className="animate-bounce uppercase font-montserrat text-xs font-semibold" >mas información</span>
                <span className="material-symbols-outlined">
                    south
                </span>
            </button>
        </div>
    </header>;
}