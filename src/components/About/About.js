import React from "react";
import "./About.css";
import me from "../../img/man.png";
import award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"> </div>
        <div className="a-card">
          <img src={me} alt="" className="a-img" />{" "}
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-subtilte">
          It is a long established fact that a reader will be distracted by the
          readable contect
        </p>
        <p className="a-descri">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
          voluptas. Magnam at incidunt, minima ducimus veniam odit. Odio, quis?
          Incidunt temporibus ex itaque aut aspernatur dolore autem iure ratione
          porro?
        </p>
        <div className="a-award">
          <img src={award} alt="" className="a-award-img" />
          <div className="a-award-text">
            <h2 className="a-award-title"> International Award 2022 </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, omnis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
