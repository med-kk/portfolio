import Navbar from "@/components/portfolio/Navbar"
import Hero from "@/components/portfolio/Hero"
import Profile from "@/components/portfolio/Profile"
import Skills from "@/components/portfolio/Skills"
import Works from "@/components/portfolio/Works"
import Footer from "@/components/portfolio/Footer"

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Profile />
      <Skills />
      <Works />
      <Footer />
    </main>
  )
}
