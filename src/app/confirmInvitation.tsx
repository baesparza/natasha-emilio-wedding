'use client'
import { FormEvent, useState } from "react";
import { saveConfirmation } from "./actions/saveConfirmation";

/**
 * Comprueba si un número de cédula es válido
 * @param {string} cedula - número de cedula a comprobar
 * @return {boolean} - retorna true si el número es válido, false de ser inválido
 */
function verificarCedula(cedula: string): boolean {
    try {
        const auxCedula = cedula;

        if (auxCedula.length !== 10) {
            return false;
        }

        const primeros2 = +auxCedula.substr(0, 2);

        if (primeros2 < 1 || primeros2 > 24) {
            return false;
        }

        const digitoVerificador = +(auxCedula.split('').slice(-1));

        const coeficientes = [2, 1, 2, 1, 2, 1, 2, 1, 2];

        const sumaT = auxCedula.substr(0, 9).split('').reduce((p, c, i) => {
            let aux = 0;

            const mult = (+c) * coeficientes[i];

            aux = mult > 9 ? mult - 9 : mult;

            return p + aux;
        }, 0);

        const residuo = sumaT % 10;

        return (residuo === 0) ? (digitoVerificador === 0) : ((10 - residuo) === digitoVerificador);
    } catch (error) {
        return false;
    }
}

export function ConfirmInvitation() {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [validationError, setValidation] = useState("");
    const [successError, setSuccess] = useState(false);

    // Handles form submission
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        let error = ''

        /// validations
        if (name.length < 3)
            error = 'Por favor completa el nombre correctamente.';
        else if (id.length < 10)
            error = 'Por favor verifica que la cédula tenga 10 caracteres.';
        else if (!verificarCedula(id))
            error = 'Ingresa una cédula valida.';

        setValidation(error);

        if (error.length > 0) {
            return;
        }

        /// save
        await saveConfirmation(id, name);
        setSuccess(true)
    };


    return <footer className="relative w-screen h-svh flex flex-col justify-center items-center gap-12">
        <h3 className="relative z-10 flex flex-col justify-center font-parisienne text-6xl text-black-light w-fit">
            <span className="-ml-12"><span className="text-rosewood text-8xl">T</span><span className="-ml-2">e</span></span>
            <span className="-mt-3">invitamos</span>
            <span className="-mt-2" >a ti</span>
            <span className="-mt-2 text-2xl self-end">a nuestra boda</span>
        </h3>

        {
            !!successError
                ? <div className="mt-2 text-center text-sm text-oliveGreen">Hemos guardado tu confirmación</div>

                // form
                : <>
                    <form onSubmit={handleSubmit} className="container flex flex-col items-center justify-center">
                        <div className="mb-8 flex flex-col md:flex-row gap-4">
                            {/* Name Input */}
                            <div className="flex flex-col gap-1 items-start max-w-screen-sm w-full">
                                <label className="text-sm font-semibold">Nombre:</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                    className="w-full border-2 border-rosewood rounded-md px-4 py-1"
                                />
                            </div>

                            {/* ID Input */}
                            <div className="flex flex-col gap-1 items-start max-w-screen-sm w-full">
                                <label className="text-sm font-semibold">Cédula:</label>
                                <input
                                    type="text"
                                    value={id}
                                    onChange={(event) => setId(event.target.value)}
                                    className="w-full border-2 border-rosewood rounded-md px-4 py-1"
                                />
                            </div>
                        </div>


                        {/* Submit Button */}
                        <button type="submit" className="relative z-10 shadow-[0px_0px_5px_rgba(0,0,0,0.2)] text-black-light w-fit px-10 py-4 text-sm uppercase hover:bg-lavender hover:text-white  transition-colors duration-200">
                            Confirma tu asistencia
                        </button>

                        {
                            !!validationError
                                ? <div className="mt-2 text-center text-sm text-[#8c1d18]">* {validationError}</div>
                                : <></>
                        }
                    </form>
                </>
        }

        {/* assets */}
        <img className="-z-20 absolute left-0 bottom-0 w-1/2 md:w-1/3 lg:w-auto blur opacity-20 md:opacity-30" src="/flowers/big-plant.png" alt="" />
        <img className="z-0 absolute right-0 bottom-2/3 w-1/2 md:w-1/3 lg:w-auto" src="/flowers/cut-right-plant.png" alt="" />
    </footer>;
}