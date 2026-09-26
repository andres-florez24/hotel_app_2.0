import Menu from "../components/Menu"
import Footer from "../components/Footer"
import Rooms from "../components/Rooms"
import "../assets/style.css"

export default function RoomsPage() {
  return (
    <>
    <Menu />
    <div className="title-page">
        <h1>RoomsPage</h1>

    </div>
    
    <Rooms />
    <Footer />
    
    </>
  )
}
