function InputError({ error, children, id='', label='' }) {
  return (
    <div className="flex flex-col items-start gap-2 py-2">
      <label htmlFor={id} className="font-light">
        {label}
      </label>
      {children}
      {error && <p className="text-[#E04124] text-sm">{error}</p>}
    </div>
  );
}

export default InputError;
