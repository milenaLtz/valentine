// import { useState } from "react";

const ContentBlock = () => {
  // const [answer, setAnswer] = useState(null);
  // const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  // const handleYesClick = () => {
  //   setAnswer("yes");
  // };

  // const handleNoEnter = () => {
  //   const randomX = Math.random() * 200 - 100;
  //   const randomY = Math.random() * 200 - 100;
  //   setNoPosition({ x: randomX, y: randomY });
  // };

  // const handleNoClick = () => {
  //   setAnswer("no");
  // }

  // if (answer === "yes") {
  //   return (
  //     <div className="content-block">
  //       <h1 className="success-title">YAAAAY 💚🐢</h1>
  //       <p className="success-text">
  //         Ich freue mich soooo sehr auf unser Valentins-Date ❤️
  //       </p>
  //     </div>
  //   );
  // }

  return (
    <div className="content-block">
      {/* <p className="content-block__title">
        Will mein Schnuffel Tuff mein Date am Valentinstag sein? &lt;3
      </p>

      <div className="content-block__button-wrapper">
        <button
          className="content-block__button content-block__button--yes"
          onClick={handleYesClick}
        >
          Ja, ich will!
        </button>

        <button
          className="content-block__button content-block__button--no"
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
        <p className="content-block__active">
          Leider ist diese Antwort falsch... Versuch es nochmal 😘
        </p>
      )} */}
    </div>
  );
};
export default ContentBlock;
