import { Link, Outlet } from "react-router-dom";
import "../styles/main.scss";
import { Footer } from "./pages/Footer";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";

export const Layouts = () => {
  return (
    <div className="layoutsWrapper">
      <header>
        <div className="headerSection">
          <div className="soMeIconsDiv">
            <Link to={"https://www.instagram.com/thefridagreen/"}>
              <FaInstagram className="faInstagram" />
            </Link>
            <Link to={"https://www.youtube.com/@fridagreeen"}>
              <FaYoutube className="faYoutube" />
            </Link>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
