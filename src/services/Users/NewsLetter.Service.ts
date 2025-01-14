const APIURL = process.env.NEXT_PUBLIC_API_URL;

export const suscribeNewsLetter = async (email: string) => {
  try {
    const response = await fetch(`${APIURL}/users/suscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(typeof err === "string" ? err : "Ha ocurrido un error desconocido");
  }
};
