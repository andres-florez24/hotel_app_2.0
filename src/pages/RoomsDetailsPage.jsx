import Menu from "../components/Menu"
import Footer from "../components/Footer"
import "../assets/style.css";
import { useParams } from "react-router-dom"    

export default function RoomsDetailsPage() {
    let {id} = useParams();
  return (
    <>
    <Menu />
        <div className="title-page">
            <h1>Romms Detail #{id}</h1>
        </div>
    <Footer/>        
    
    
    </>
  )
}
