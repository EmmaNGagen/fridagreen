import { useState } from "react";
import { BsChevronDown } from "@react-icons/all-files/bs/BsChevronDown";
import { BsChevronUp } from "@react-icons/all-files/bs/BsChevronUp";

export const About = () => {
  const [readMore, setReadMore] = useState(false);
  const [toggle, setToggle] = useState(true);
  const moreContent = (
    <div>
      <p className="extraContentText">
        Frida har sjungit på massor av begravningar, dop och lokala event. Efter
        fina lovord i finalen av Talang 2018 släppte Frida Green 2019 äntligen
        debutsingeln ”Beat Em Up”. Låten tog sig omedelbart in på Sveriges Radio
        i A-rotation. Frida Green hörs också sjunga lead i låten ”Johnny G (the
        Guidetti Song)” där hon gästar DJn Badpojken. Låten låg etta i Sverige
        sommaren 2015.
        <br />
        <br />
        Många är det som har väntat på det stora genombrottet och nu är det
        äntligen dags för det svenska folket att få upptäcka henne. Frida är 28
        år gammal, har gått på Estetiska programmet i Ystad och varit med i
        diverse lokala band, då ofta som bakgrundssångerska. Vid en
        skivinspelning i Cardiac Records studio i Ystad (Frans, Renaida mfl) tog
        producenten Frida åt sidan och sa: ”Du är så jävla bra, du borde stå
        längst fram!”.
      </p>
    </div>
  );
  const linkName = readMore ? "Läs mindre" : "Läs mer ";

  return (
    <>
      <div className="readContent">
        <div className="copyContainer">
          <h5 className="headlineContentText">
            För den breda publiken i Sverige är Frida Green fortfarande en
            doldis, men i hemstaden Ystad är det knappast någon som inte känner
            till den skönsjungande kassörskan som gjorde debut i
            Melodifestivalen 2021.
          </h5>
          <p className="contentText">
            Frida har sjungit så länge hon kan minnas. Hennes mamma tog med
            henne till kyrkokören som liten och då öppnades dörren till en helt
            ny värld. Hon sjöng hemma och hon sjöng i skolan och när hon så
            småningom hade tagit studenten bestämde hon sig för att studera sång
            på en folkhögskola på Gotland.
            <br />
            <br />
          </p>
          <div className="showMoreContent">{readMore && moreContent}</div>
        </div>

        <a
          className="read-more-link"
          onClick={() => {
            setReadMore(!readMore);
            setToggle(!toggle);
          }}
        >
          <h2 className="lasMer">{linkName}</h2>
          {toggle ? (
            <BsChevronDown className="arrow" />
          ) : (
            <BsChevronUp className="arrow" />
          )}
        </a>
      </div>
    </>
  );
};
