import React from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { Helmet } from "react-helmet";
import VideoBg from "../src/assets/video.mp4";
import "./styles.css";

const App = () => {
  return (
    <section className="page">
      <Helmet>
        <title>Coming Soon | CineTurkey</title>
        <meta
          name="description"
          content="We are working hard to provide you with the best service. We will be with you soon!"
        />
        <meta name="keywords" content="CineTurkey" />
        <meta name="author" content="Özkan Büyük" />
      </Helmet>

      <div className="overlay"></div>

      <video
        src={VideoBg}
        autoPlay
        loop
        muted
        className="background-video"
      ></video>

      <div className="page__content">
        <h1>Coming Soon</h1>
        <h3>
          We are working hard to provide you with the best service. We will be
          with you soon!
        </h3>

        <FlipClockCountdown
          to={new Date().getTime() + 24 * 60 * 60 * 1000}
          className="flip-clock"
          labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
          duration={0.5}
        ></FlipClockCountdown>

        <button className="btn">CineTurkey</button>
      </div>
    </section>
  );
};

export default App;
