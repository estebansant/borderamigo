import "./globals.css";
import { Header } from "../components/Header/Header";

export const metadata = {
  title: "BorderAmigo",
  description:
    "We pave the way to streamline and fast track your digital nomad residence in Spain. We handle the tedious details so you can enjoy more tapas, siestas and sunshine in Spain.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />
      <body>{children}</body>
    </html>
  );
}
