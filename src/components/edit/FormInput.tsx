import { useState, useEffect } from 'react';

export default function FormInput({
  label,
  value,
  name = '',
  type = 'text',
  placeholder = label,
}: {
  label: string;
  value: string;
  name?: string;
  type?: string;
  placeholder?: string;
}) {
  const [data, setData] = useState(value);

  useEffect(() => {
    setData(value);
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData(event.target.value);
  };

  return (
    <div className="field inputWrapper">
      <label className="label dark">{label}</label>
      <input
        value={data}
        onChange={handleChange}
        className="input"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}
