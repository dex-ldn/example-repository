export default function FormSelect({
  label,
  children,
  name,
}: {
  label: string;
  children: JSX.Element[];
  name: string;
}) {
  return (
    <div className="formSelect">
      <label className="label">{label}</label>
      <select name={name} className="select">
        {children}
      </select>
    </div>
  );
}
