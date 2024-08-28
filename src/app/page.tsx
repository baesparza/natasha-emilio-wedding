"use client"

import { useState } from "react";
import { BankAccount } from "./bankAccount";
import { ConfirmInvitation } from "./confirmInvitation";
import { EventInformation } from "./eventInformation";
import { HeroVideo } from "./heroVideo";
import { Indications } from "./indications";

export default function Home() {

  const [showModal, setModal] = useState(true) // [valor, función para cambiar el valor]

  function hideModal() {
    setModal(false);
  }

  return (
    <>
      {/* welcome video */}
      <HeroVideo />

      <main className="relative z-20 bg-white">

        {/* spacer */}
        <div className="mt-[100svh]"></div>

        {/* direction */}
        <EventInformation />

        {/* indications */}
        <Indications />

        {/* banking info */}
        <BankAccount />

        {/* invitation */}
        <ConfirmInvitation />

        ${
          showModal
            ? <div className="sticky bottom-0 w-full left-0 right-0  bg-white z-50  shadow-[rgba(0,_0,_0,_0.25)_0px_0.0625em_0.0625em,_rgba(0,_0,_0,_0.25)_0px_0.125em_0.5em,_rgba(255,_255,_255,_0.1)_0px_0px_0px_1px_inset]">
              <div className="container mx-auto px-4 py-6 flex flex-row justify-between gap-6 items-center">
                <span className="font-semibold text-sm">
                  No te olvides confirmar tu asistencia llenando el formulario al final de la página.
                </span>
                <button onClick={hideModal} className="font-semibold text-sm text-lavender border px-2 py-1 border-lavender">
                  Entendido
                </button>
              </div>
            </div>  // true
            : <></> // False
        }

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
