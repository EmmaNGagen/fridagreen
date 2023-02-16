import { Link } from "react-router-dom";
import theSilence from "../components/assets/theSilence.jpg";
import { BsPlayFill } from "@react-icons/all-files/bs/BsPlayFill";
import talang from "../components/assets/talang.jpg";
import bingo from "../components/assets/bingo.jpg";
import fridaGlad from "../components/assets/fridaGlad.jpg";

export const YoutubeEmbed = () => {
  return (
    <main className="mainVideoPage">
      <h3 className="liveVideos-title">liveframträdande</h3>
      <div className="videoWrapper">
        <div className="videoImageDiv">
          <Link
            target="_blank"
            to={"https://www.youtube.com/watch?v=PcEWUdML0q8&t=1s"}
          >
            <BsPlayFill className="playIcon" />
            <img
              className="imageCover"
              width="560"
              height="380"
              src={theSilence}
              alt="Frida Green on stage in melodifestivalen"
            />
          </Link>
          <div className="watchNow">
            <p className="videoTitle">The Silence</p>
            <Link
              target="_blank"
              to={"https://www.youtube.com/watch?v=PcEWUdML0q8&t=1s"}
            >
              <button className="videoBtn">Titta nu</button>
            </Link>
          </div>
        </div>

        <div className="videoImageDiv">
          <Link
            target="_blank"
            to={"https://www.youtube.com/watch?v=Stx_pZofuy8"}
          >
            <BsPlayFill className="playIcon" />
            <img
              className="imageCover"
              width="560"
              height="320"
              src={talang}
              alt="Frida Green on stage in Talang"
            />
          </Link>
          <div className="watchNow">
            <p className="videoTitle">Chandelier</p>
            <Link
              target="_blank"
              to={"https://www.youtube.com/watch?v=Stx_pZofuy8"}
            >
              <button className="videoBtn">Titta nu</button>
            </Link>
          </div>
        </div>

        <div className="videoImageDiv">
          <Link
            target="_blank"
            to={"https://www.youtube.com/watch?v=sFQin4hZQ2M"}
          >
            <BsPlayFill className="playIcon" />
            <img
              className="imageCover"
              width="560"
              height="320"
              src={bingo}
              alt="Frida Green on stage in Talang"
            />
          </Link>

          <div className="watchNow">
            <p className="videoTitle">Beat 'Em Up</p>
            <Link
              target="_blank"
              to={"https://www.youtube.com/watch?v=sFQin4hZQ2M"}
            >
              <button className="videoBtn">Titta nu</button>
            </Link>
          </div>
        </div>

        <div className="videoImageDiv">
          <Link
            target="_blank"
            to={"https://www.youtube.com/watch?v=ZcNUlc3pM3A"}
          >
            <BsPlayFill className="playIcon" />
            <img
              className="imageCover"
              width="560"
              height="380"
              src={fridaGlad}
              alt="Frida Green on stage in Talang"
            />
          </Link>

          <div className="watchNow">
            <p className="videoTitle">She Used to Be Mine</p>
            <Link
              target="_blank"
              to={"https://www.youtube.com/watch?v=ZcNUlc3pM3A"}
            >
              <button className="videoBtn">Titta nu</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
