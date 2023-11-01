import useClickOutside from "../hooks/useClickOutside";


function Dropdown({ children, trigger, showDropdown, setShowDropdown }) {
  const dropRef = useClickOutside(()=>setShowDropdown(false))
  return (
    <span onClick={() => setShowDropdown((show) => !show)} ref={dropRef}>
      {trigger}
      {showDropdown && <ul className="absolute list-none">{children}</ul>}
    </span>
  );
}

export default Dropdown;
