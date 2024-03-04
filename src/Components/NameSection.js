import React from "react";
import fire from "../videos/Fire.mp4"
import poster from "../Images/fire.gif"

export default function NameSection() {
  return (
    <div class="herosection">
      <div class="background_for_herosection">
        <p class="BigIconHerosection">
          ALL <br /> NEPAL <br />
          TRADE <br />
          CENTER
        </p>
        <div class="buttons">
          <a href="tel:+977-9801912091">
            <button class="for-herosection b1">Call Now</button>
          </a>
          <a href="https://g.co/kgs/bs2s3d" target="_blank">
            <button class="for-herosection b2">Find Us</button>
          </a>
        </div>
        <div class="fire-video-container">
          <video
            class="fire-video js-fire-video"
            src={fire}
            type="video/mp4"
            autoplay
            loop
            muted
            playsinline
            poster={poster}
          >
            <img src="Images/fire" alt="" />
          </video>
        </div>
      </div>
    </div>
  );
}
