'use server'



const databaseURL = 'https://labs-63faf.firebaseio.com/';



// Handles form submission
export async function saveConfirmation(phone: string, name: string): Promise<void> {
    // Verifica si el nombre ya existe en la base de datos

    const response = await fetch(`${databaseURL}/natasha-emilio-wedding/confirmaciones/${phone}.json`);
    const data = await response.json();

    // Si el nombre no está registrado, agrega el nuevo registro
    await fetch(`${databaseURL}/natasha-emilio-wedding/confirmaciones/${phone}.json`, {
        method: 'PUT',
        body: JSON.stringify({ ...data, [Date.now()]: name }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
};
