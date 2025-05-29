import { Deposit } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Depósito | GLU Logística",
  openGraph: {
    title: "Depósito | GLU Logística",
    url: "https://glulogistica.com.ar/user/deposit",
  },
};

export default function DepositPage() {
  return <Deposit />;
}
