import React, { useState } from "react";

export default function UrlInput({ onCheck }) {
  const [url, setUrl] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Website URL"
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={() => onCheck(url)}>Check</button>
    </div>
  );
}
