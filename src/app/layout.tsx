export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body id="site-layout" className="site-layout antialiase">
        <main>{children}</main>
      </body>
    </html>
  );
}
