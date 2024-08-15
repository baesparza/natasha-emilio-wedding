import { BankAccount } from "./bankAccount";
import { ConfirmInvitation } from "./confirmInvitation";
import { EventInformation } from "./eventInformation";
import { HeroVideo } from "./heroVideo";
import { Indications } from "./indications";

export default function Home() {
  return (
    <>
      {/* welcome video */}
      <HeroVideo />

      <main className="relative z-20 bg-white">

        {/* spacer */}
        <div className="mt-[100svh]"></div>
      
        {/* <img src="/flowers/cut-right-plan-flipped.png" alt="" /> */}

        {/* direction */}
        <EventInformation />

        {/* indications */}
        <Indications />

        {/* banking info */}
        <BankAccount />

        {/* invitation */}
        <ConfirmInvitation />

        {/* assets */}
        <img className="fall-leaf -z-10 blur absolute top-[22%] left-20" src="/flowers/single-leaf-2.png" alt="" />
        <img className="fall-leaf -z-10 blur absolute top-[20%] right-20" src="/flowers/single-leaf.png" alt="" />
        <img className="fall-leaf -z-10 blur absolute top-[40%] left-32" src="/flowers/single-leaf.png" alt="" />
        <img className="fall-leaf -z-10 blur absolute top-[45%] right-16" src="/flowers/single-leaf.png" alt="" />
        <img className="fall-leaf -z-10 blur absolute top-[75%] left-4" src="/flowers/single-leaf-2.png" alt="" />
        <img className="fall-leaf -z-10 blur absolute top-[80%] right-20" src="/flowers/single-leaf.png" alt="" />
      </main>
    </>
  );
}
