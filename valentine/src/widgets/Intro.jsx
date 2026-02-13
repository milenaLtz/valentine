const Intro = ({ next }) => {
  return (
    <div className="intro">
      <p className="intro__text">Mein lieber Schnuffeltuff,</p>
      <p className="intro__text">du bist der allerbeste Mensch in meinem Leben und ich schätze es sehr dich zu haben!! Hier ist eine Kleinigkeit, die ich dir zum Valentinstag vorbereitet habe. (Zum Jahrestag wäre es safe noch süßer gekommen, aber da hatte ich die Idee noch nicht..) Jedenfalls hoffe ich sehr, dass es dir gefällt und du es süß findest. Und ich hoffe auch, dass nicht allzu viele Bugs auftauchen xD</p>
      <button className="intro__button" onClick={next}>Viel Spaß mein Schatz!</button>
    </div>
  );
};
export default Intro;
