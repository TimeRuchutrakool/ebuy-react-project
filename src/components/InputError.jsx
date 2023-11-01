function InputError({ error, children, label }) {
  return (
    <div className="flex flex-col items-start gap-2 py-2">
      <label htmlFor={label}>{label}</label>
      {children}
      {error && <p className="text-[#E04124] text-sm">{error}</p>}
    </div>
  );
}

export default InputError;
