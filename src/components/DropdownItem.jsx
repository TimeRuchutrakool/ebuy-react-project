function DropdownItem({ children, onClick }) {
  return (
    <li
      className="cursor-pointer p-4"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </li>
  );
}

export default DropdownItem;
