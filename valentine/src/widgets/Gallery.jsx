import MemoryPhoto from "./MemoryPhoto";
import { memories } from "../shared/memories";

const Gallery = ({ next }) => {
  return (
    <div className="gallery">
      <h1>Unsere Geschichte bis jetzt :)</h1>

      <div className="gallery__grid">
        {memories.map(memory => (
          <MemoryPhoto
            src={memory.src}
            message={memory.message}
          />
        ))}
      </div>

      <button className="next-button" onClick={next}>
        Weiter →
      </button>
    </div>
  );
};

export default Gallery;
