import { Profile } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perfil | GLU Logística",
  openGraph: {
    title: "Perfil | GLU Logística",
    url: "https://glulogistica.com.ar/user/profile",
  },
};

export default function ProfilePage() {
  return <Profile />;
}
