import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Ours from "../components/Ours";
import "../assets/style.css"

export default function OursPage() {
  return (
    <>
      <Menu />
      <div className="title-page">
        <h1>OursPage</h1>
      </div>
      <Ours />
      <Footer />
    </>
  )
}
