const APIURL = process.env.NEXT_PUBLIC_API_URL;

export const signIn = async (email: string, password: string) => {
  try {
    const response = await fetch(`${APIURL}/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);

    // throw new Error(typeof err === "string" ? err : "Ha ocurrido un error desconocido");
  }
};
