import { ConfirmInvitation } from "./confirmInvitation";
import { EventInformation } from "./eventInformation";
import { Indications } from "./indications";

export default function Home() {
  return (
    <>
      {/* welcome video */}
      <header className="fixed inset-0 z-0 w-screen h-screen">
        <div className="relative w-full h-full">

          {/* video */}
          <video autoPlay={true} muted={true} loop={true} playsInline={true} id="myVideo" className="z-0 absolute inset-0 w-full h-full object-cover">
            <source src="/assets/intro.mp4" type="video/mp4" />
          </video>

          {/* overlay */}
          <div className="z-10 absolute inset-0 w-full h-full bg-black-dark opacity-20" />

          {/* content over video */}
          <div className="relative z-20 flex justify-center items-center h-full w-full">
          <h1 className="font-parisienne text-4xl md:text-6xl lg:text-8xl text-white-bride w-full max-w-60 lg:max-w-lg px-4 py-4 text-center leading-snug">
            Todas las bodas tienen una historia...
          </h1>
          </div>
        </div>
      </header>

      <main className="relative z-10 bg-white">

        {/* spacer */}
        <div className="mt-[100vh]"></div>

        {/* direction */}
        <EventInformation />

        {/* indications */}
        <Indications />

        {/* gifts */}

        {/* invitation */}
        <ConfirmInvitation />
      </main>
    </>
  );
}
