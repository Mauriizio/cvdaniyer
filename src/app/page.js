import Hero from "/components/Hero.jsx"

export const metadata = {
  title: "Daniyer CV",
  description: "Currículo profesional de Daniyer Mendoca, vigilante de seguridad.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
    </main>
  )
}
