import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GLU Logística",
  description: "",
  icons: "/assets/images/Header/logo.svg",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="root-main px-3 my-10 sm:px-4 lg:max-w-[1200px] lg:mx-auto">{children}</div>
  );
}
