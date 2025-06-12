import { History } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Historial | GLU Logística",
  openGraph: {
    title: "Historial | GLU Logística",
    url: "https://glulogistica.com.ar/user/history",
  },
};

export default function HistoryPage() {
  return <History />;
}
