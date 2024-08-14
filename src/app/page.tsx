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

      
        {/* <img src="/flowers/bottom-left-leaf.png" alt="" />
        <img src="/flowers/cut-right-plan-flipped.png" alt="" />
        <img src="/flowers/rose.png" alt="" />
        <img src="/flowers/single-leaf-2.png" alt="" />
        <img src="/flowers/single-leaf.png" alt="" />
        <img src="/flowers/thin-plant.png" alt="" /> */}

        {/* direction */}
        <EventInformation />

        {/* indications */}
        <Indications />

        {/* banking info */}
        <BankAccount />

        {/* invitation */}
        <ConfirmInvitation />
      </main>
    </>
  );
}
