// app/head.js

export const metadata = {
  title: "Daniyer CV",
  description: "Currículo de Daniyer Mendoca - Vigilante de Seguridad Profesional",
  metadataBase: new URL("https://daniyer.online"),
  openGraph: {
    title: "Daniyer CV",
    description: "Currículo de Daniyer Mendoca - Vigilante de Seguridad Profesional",
    url: "https://daniyer.online",
    siteName: "Daniyer CV",
    type: "website",
    images: [
      {
        url: "/images/favicon.jpg",
        width: 800,
        height: 600,
        alt: "Daniyer CV",
      },
    ],
  },
  icons: {
    icon: "/images/favicon.jpg",
  },
};

export default function Head() {
  return (
    <>
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Daniyer Mendoca" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
}
