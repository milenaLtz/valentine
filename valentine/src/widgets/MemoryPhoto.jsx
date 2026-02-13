const MemoryPhoto = ({ src, message }) => {
  return (
    <div className="memory">
      <img src={src} alt="memory" />
      <div className="memory__overlay">
        {message}
      </div>
    </div>
  );
};

export default MemoryPhoto;
