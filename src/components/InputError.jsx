function InputError({ error, children, label }) {
  return (
    <div className="flex flex-col items-start gap-2 py-2">
      <label htmlFor={label}>{label}</label>
      {children}
      {error && <span className="text-[#E04124]">{error}</span>}
    </div>
  );
}

export default InputError;
