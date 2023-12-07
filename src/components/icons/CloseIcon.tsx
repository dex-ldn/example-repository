export default function CloseIcon({ onClick }: { onClick: () => void }) {
  return (
    <span className="icon closeIcon" onClick={onClick}>
      <i className="fa-solid fa-xmark"></i>
    </span>
  );
}
