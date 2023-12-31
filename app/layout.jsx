import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "Visa Pulse | Get Digital Nomad Visa for Spain Seamlessly",
  description:
    "Want Spain's new remote worker visa? DigitalNomadVisa.io helps qualified nomads get approved with complete how-to guides, resources and application services for stress-free Spain residency.",
  openGraph: {
    title: "Visa Pulse",
    description: "Get your Digital Nomad Visa for Spain Seamlessly",
    // Add URL to the actual working website
    url: "https://www.digitalnomadvisa.io/",
    images: "/app/opengraph-image.jpg",
    type: "website",
  },
  twitter: {
    title: "Visa Pulse",
    description: "Get your Digital Nomad Visa for Spain Seamlessly",
    image: "/app/opengraph-image.jpg",
    url: "https://www.digitalnomadvisa.io/",
    type: "website",
  },
  icons: {
    icon: "/app/favicon.ico",
    shortcut: "/app/favicon.ico",
    other: [
      {
        rel: "icon",
        sizes: "32x32",
        type: "image/png",
        url: "/app/favicon-32x32.png",
      },
      {
        rel: "icon",
        sizes: "16x16",
        type: "image/png",
        url: "/app/favicon-16x16.png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script
          defer
          type="text/javascript"
          src="https://api.pirsch.io/pirsch.js"
          id="pirschjs"
          data-code="bF57uKAnMD2b4rHBJLdcV6lpmDQkZmdo"
        ></script>
      </Head>
      <body>{children}</body>
    </html>
  );
}
