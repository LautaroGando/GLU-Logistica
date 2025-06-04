import { cookies } from "next/headers";
import { getOrders, getProductByCompanyName } from "@/services";
import { buildDepositTable } from "@/data";
import { TableBase, UserTitle } from "@/components";

export const metadata = {
  title: "Depósito | GLU Logística",
  openGraph: {
    title: "Depósito | GLU Logística",
    url: "https://glulogistica.com.ar/user/deposit",
  },
};

export default async function DepositPage() {
  const raw = (await cookies()).get("user-storage")?.value;

  if (!raw) return <div>Sesión no encontrada.</div>;

  let company: string | null = null;
  try {
    const parsed = JSON.parse(raw);
    const user = parsed?.user || parsed;
    company = user?.company || null;
  } catch {
    return <div>Error al leer la cookie del usuario.</div>;
  }

  if (!company) return <div>Error: empresa no disponible.</div>;

  const depositData = await getProductByCompanyName(company);
  const shipmentsData = await getOrders();

  const { headers, rows } = buildDepositTable(depositData, shipmentsData, company);

  return (
    <section className="mt-6">
      <UserTitle text="Depósito" />
      <TableBase headers={headers} rows={rows} />
    </section>
  );
}
