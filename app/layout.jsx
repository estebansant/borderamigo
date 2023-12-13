import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "Visa Pulse | Get Digital Nomad Visa for Spain Seamlessly",
  description:
    "Want Spain's new remote worker visa? DigitalNomadVisa.io helps qualified nomads get approved with complete how-to guides, resources and application services for stress-free Spain residency.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Visa Pulse | Get Digital Nomad Visa for Spain Seamlessly</title>
        <meta
          name="description"
          content="Want Spain's new remote worker visa? DigitalNomadVisa.io helps qualified nomads get approved with complete how-to guides, resources and application services for stress-free Spain residency."
          key="desc"
        />

        <meta property="og:title" content="Visa Pulse" />
        <meta
          property="og:description"
          content="Get your Digital Nomad Visa for Spain Seamlessly"
        />

        <link rel="shortcut icon" href="/public/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/public/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/public/favicon-16x16.png"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
