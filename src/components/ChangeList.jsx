export default function ChangeList({ changes }) {
  return (
    <div>
      <h3>Changes:</h3>
      <ul>
        {changes.map((c, i) => (
          <li key={i} style={{ color: c.type === "major" ? "red" : "green" }}>
            {c.text} - {c.type}
          </li>
        ))}
      </ul>
    </div>
  );
}
