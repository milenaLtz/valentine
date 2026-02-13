import { useState } from "react";
import { memories } from "../shared/memories";

const MemorySlider = ({ next }) => {
  const [index, setIndex] = useState(0);

  const goNext = () => {
    if (index < memories.length - 1) {
      setIndex(index + 1);
    }
  };

  const goPrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const memory = memories[index];

  return (
    <div className="slider">

      <h1 className="slider__title">Unsere Geschichte bisher &lt;3</h1>

      <div className="slider__image-wrapper">
        <img src={memory.src} alt="memory" />

        <div className="slider__overlay">
          {memory.message}
        </div>
      </div>

      <div className="slider__controls">
        <button onClick={goPrev} disabled={index === 0}>
          ← Zurück
        </button>

        <span className="slider__counter">
          {index + 1} / {memories.length}
        </span>

        <button onClick={goNext} disabled={index === memories.length - 1}>
          Weiter →
        </button>
      </div>

      {index === memories.length - 1 && (
        <button className="slider__finish" onClick={next}>
          Und weiter gehts!!
        </button>
      )}

    </div>
  );
};

export default MemorySlider;
