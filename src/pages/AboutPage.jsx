import Menu from "../components/Menu";  
import Footer from "../components/Footer";
import About from "../components/About";
import "../assets/style.css"


export default function AboutPage() {
  return (
    <> 
        <Menu />
        <div className="title-page">
            <h1>AboutPage</h1>
        </div>
        <About />
        <Footer />  
    </>
  )
}
