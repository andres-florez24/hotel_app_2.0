import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import "../assets/style.css"

export default function ContactPage() {
  return (
    <>
      <Menu />
      <div className="title-page">
        <h1>ContactPage</h1>
      </div>
      <Contact />
      <Footer />
    </>
  )
}
