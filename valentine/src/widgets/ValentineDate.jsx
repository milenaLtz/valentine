import { useState } from "react";
import schildo from "../assets/schildo.png";

const ValentineDate = () => {

  const [answer, setAnswer] = useState(null);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const handleYesClick = () => {
    setAnswer("yes");
  };

  const handleNoEnter = () => {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    setNoPosition({ x: randomX, y: randomY });
  };

  const handleNoClick = () => {
    setAnswer("no");
  }

  if (answer === "yes") {
    return (
      <div className="content-block">
        <div className="success">
          <h1 className="success-title">YAAAAY</h1>
          <img className="success-img" src={schildo}></img>
        </div>
      </div>
    );
  }

  return (
    <div className="valentine">
      <p className="valentine__title">
        Will mein Schnuffel Tuff mein Date am Valentinstag sein? &lt;3
      </p>

      <div className="valentine__button-wrapper">
        <button
          className="valentine__button valentine__button--yes"
          onClick={handleYesClick}
        >
          Ja, ich will!
        </button>

        <button
          className="valentine__button valentine__button--no"
          onMouseEnter={handleNoEnter}
          onClick={handleNoClick}
          style={{
            transform: `translate(${noPosition.x}px, ${noPosition.y}px)`
          }}
        >
          Nein, ich will nicht!
        </button>
      </div>

      {answer === "no" && (
        <p className="valentine__active">
          Leider ist diese Antwort falsch... Versuch es nochmal!
        </p>
      )}
    </div>
  );
};
export default ValentineDate;
