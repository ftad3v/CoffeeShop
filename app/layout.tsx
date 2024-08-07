import "./globals.css";
import { StoreContextProvider } from "./context/StoreContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreContextProvider>{children}</StoreContextProvider>
        {/* <CartProvider>{children}</CartProvider> */}
      </body>
    </html>
  );
}
