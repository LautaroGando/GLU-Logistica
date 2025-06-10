import { Payments } from "@/components";

export const metadata = {
  title: "Mis pagos | GLU Logística",
  openGraph: {
    title: "Mis pagos | GLU Logística",
    url: "https://glulogistica.com.ar/user/payments",
  },
};

export default function PaymentsPage() {
  return <Payments />;
}
