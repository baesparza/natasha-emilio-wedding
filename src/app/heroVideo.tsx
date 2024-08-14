"use client"
function scrollToNextContent() {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
}


export function HeroVideo() {
    return <header className="fixed inset-0 z-0 w-screen h-screen">
        <div className="relative w-full h-full">
            {/* logo */}
            <img src="/assets/logo.jpg" alt="" className="fixed top-0 left-0 z-30 w-64 h-auto mix-blend-color-dodge invert -ml-10 mt-4" />

            {/* video */}
            <video autoPlay={true} muted={true} loop={true} playsInline={true} id="myVideo" className="z-0 absolute inset-0 w-full h-full object-cover">
                <source src="/assets/intro.mp4" type="video/mp4" />
            </video>

            {/* overlay */}
            <div className="z-10 absolute inset-0 w-full h-full opacity-30 bg-black" />

            {/* content over video */}
            <div className="relative z-20 flex justify-center items-center h-full w-full">
                <h1 className="font-parisienne text-4xl md:text-6xl lg:text-8xl text-white-bride w-full max-w-60 lg:max-w-lg px-4 py-4 text-center leading-snug">
                    Todas las bodas tienen una historia...
                </h1>
            </div>


            {/* scroll */}

            <button onClick={scrollToNextContent} className=" flex flex-col items-center justify-center  absolute text-white z-40 left-1/2 bottom-12">
                <span className="animate-bounce uppercase font-montserrat text-xs font-semibold" >mas información</span>
                <span className="material-symbols-outlined">
                    south
                </span>
            </button>
        </div>
    </header>;
}