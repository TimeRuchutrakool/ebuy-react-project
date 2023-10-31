function BlurBlackground({ children }) {
  return (
    <div className="w-full h-full fixed top-0 bottom-0 z-20 flex justify-center items-center">
      {children}
    </div>
  );
}

export default BlurBlackground;
