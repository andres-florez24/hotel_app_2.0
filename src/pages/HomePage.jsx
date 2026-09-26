import Banner from "../components/Banner";
import Menu from "../components/Menu";
import Rooms from "../components/Rooms";
import About from "../components/About";
import Ours from "../components/Ours";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function HomePage() {
    let logo = "Hotel Inter🏨"
    return (
        <>

            <Menu data={logo} />
            <Banner />
               < div className="w3-content "style={{ "maxWidth":"1532px"}}>
               <Rooms />
               <About />
               <Ours />
               <Contact />
               </div>
            <Footer />
        </>
            
    )
}