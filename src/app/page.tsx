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
        <div className="mt-[100dvh]"></div>

            {/* <img src="/assets/logo.jpg" alt="" className="sticky z-50 top-0 left-0  w-16 h-28 object-cover mix-blend-multiply bg-white" /> */}

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
