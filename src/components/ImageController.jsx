function ImageController({ position, children, onClick }) {
  return (
    <button
      className={`absolute ${position} bg-white p-2 rounded-full opacity-30`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ImageController;
