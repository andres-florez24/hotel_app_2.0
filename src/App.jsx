import { Routes, Route} from "react-router-dom"
import HomePage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage"
import OursPage from "./pages/OursPage"
import RoomsPage from "./pages/RoomsPage"
import ContactPage from "./pages/ContactPage"
import NotFoundPage from "./pages/NotFoundPage"
import RoomsDetailsPage from "./pages/RoomsDetailsPage";

export default function App() {
  return (
    <Routes>
      <Route path ="/" element={<HomePage />} />
      <Route path ="/About" element={<AboutPage />} />
      <Route path ="/Ours" element={<OursPage />} />
      <Route path ="/Rooms" element={<RoomsPage />} />
      <Route path ="/Rooms/:id" element={<RoomsDetailsPage />} />
      <Route path ="/Contact" element={<ContactPage />} />
      <Route path ="*" element={<NotFoundPage />} />
    </Routes>
  )

}