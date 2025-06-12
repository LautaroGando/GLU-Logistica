import { Shipments } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mis Envíos | GLU Logística",
  openGraph: {
    title: "Mis Envíos | GLU Logística",
    url: "https://glulogistica.com.ar/user/shipments",
  },
};

export default function ShipmentsPage() {
  return <Shipments />;
}
