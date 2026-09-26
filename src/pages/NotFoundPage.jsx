import Menu from "../components/Menu";
import Footer from "../components/Footer";
import "../assets/style.css";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <Menu />
      <div className="title-page center">
        <div>NotFoundPage</div>
        <Link to="/">ir al inicio</Link>
      </div>
      <Footer />
    </>
  );
}