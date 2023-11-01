function Heading({ children, bold = false, big = false }) {
  return (
    <h1
      className={`${bold ? "font-semibold" : "font-medium"} ${
        big ? "text-2xl" : "text-xl"
      }`}
    >
      {children}
    </h1>
  );
}

export default Heading;
