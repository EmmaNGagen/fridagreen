import Spotify from "react-spotify-embed";
import { About } from "../About";
import { YoutubeEmbed } from "../YoutubeEmbed";

export const Home = () => {
  return (
    <main className="mainHome">
      <div className="fridaContent">
        <div className="textDiv">
          <h1 className="gradient-text">frida green</h1>
          <h4 className="songTitle"> it ain't over</h4>
        </div>
      </div>
      <About />
      <div className="spotifyDiv">
        <div className="spotifyText">
          <p>frida green</p>
          <p>frida green</p>
        </div>
        <div className="spotifyLink">
          <Spotify link="https://open.spotify.com/artist/1ZRgSgUcrIJQOzhiDNrUVL?utm_source=generator" />
        </div>
      </div>

      <section className="youtubeSection">
        <YoutubeEmbed />
      </section>
    </main>
  );
};
