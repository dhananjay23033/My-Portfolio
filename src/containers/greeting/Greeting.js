import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";
import Typed from "react-typed";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className="greeting-text"
                style={{
                  whiteSpace: "pre-wrap",
                  color: theme.text,
                  display: "inline",
                }}
              >
                Hi!
                <br />
                I'm{" "}
                <span style={{ fontWeight: "bold", color: "purple" }}>
                  Dhananjay Sharma
                </span>
                <br />I am a&nbsp;
              </h1>
              <Typed
                className="greeting-typed"
                strings={[
                  "Software Engineer",
                  "AI/ML Developer",
                  "Competitive Programmer",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
                style={{
                  color: "purple",
                  fontSize: "40px",
                  fontWeight: "bold",
                  display: "inline",
                }}
              />

              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                <Button
                  text="⭐ Star Me On Github"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>
              {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
            </div>
          </div>
          <div className="greeting-image-div">
            {/* <img
							alt="saad sitting on table"
							src={require("../../assets/images/feelingProud.svg")}
						></img> */}
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
