import { Link } from "react-router-dom";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare";

export const Footer = () => {
  return (
    <footer className="text-center text-white">
      <div className="container">
        <hr></hr>
        <section className="contactSection">
          <p className="contact-text">Kontakta på</p>
          <a className="email-link" href="mailto:info@fridagreen.se">
            info@fridagreen.se
          </a>
        </section>

        <section className="soMeSection">
          <h5 className="follow-text">Följ frida</h5>
          <div className="soMeIconsDiv">
            <Link
              target="_blank"
              to={"https://www.instagram.com/thefridagreen/"}
            >
              <FaInstagram className="faInstagram" />
            </Link>
            <Link target="_blank" to={"https://www.youtube.com/@fridagreeen"}>
              <FaYoutube className="faYoutube" />
            </Link>

            <Link
              target="_blank"
              to={
                "https://www.facebook.com/thefridagreen?hc_ref=ARSmpBLjZha-RVCACeyDabeBsM80WCbxh_PLUbQ9EeF_qmwWdhIesCVtdvGZmjF9-co&fref=nf&__xts__[0]=68.ARCb1jqI2g4qybQJg31ZbO45_ytoa5yqPhUWDQ9T8jKOh-MdhR3qLKGomlVG2VFmygtSP-uWPbhC2hiPr9xlbGgNsTEZcI5sjXL_Gn_L-x04Id2exZ5gL1MlCSy6-f6-SddpnPbHs8rDrOQcUoGvmaVSYjJuVR9uwSvwsuhioM5BeFPQPNm64p_DINMN1qB5zf6AAHhCnJApCIl3l2IaJrrgYl14cA8SfghIru0UF_5PIIyTWpFzZZ9ukTFY6p22r90yuiRiDcTIQ2AfGZHBWNkGemYbabla87PR4T0Rx4O5fnENjq-IwA"
              }
            >
              <FaFacebookSquare className="faFacebook" />
            </Link>
          </div>
        </section>
      </div>

      <div className="Copyright-div ">
        <p className="Copyright-text">
          {" "}
          © 2023 Copyright: Emma N Gagen & Frida Green
        </p>
      </div>
    </footer>
  );
};
