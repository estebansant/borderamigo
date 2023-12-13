import "./globals.css";

export const metadata = {
  title: "Visa Pulse | Get Digital Nomad Visa for Spain Seamlessly",
  description:
    "Want Spain's new remote worker visa? DigitalNomadVisa.io helps qualified nomads get approved with complete how-to guides, resources and application services for stress-free Spain residency.",
  openGraph: {
    title: "Visa Pulse",
    description: "Get your Digital Nomad Visa for Spain Seamlessly",
    // Add URL to the actual working website
    url: "https://nextjs.org",
    images: "/app/(root)/(home)/opengraph-image.jpg",
    type: "website",
  },
  icons: {
    icon: "/public/favicon.ico",
    shortcut: "/public/favicon.ico",
    other: [
      {
        rel: "icon",
        sizes: "32x32",
        type: "image/png",
        url: "/public/favicon-32x32.png",
      },
      {
        rel: "icon",
        sizes: "16x16",
        type: "image/png",
        url: "/public/favicon-16x16.png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
