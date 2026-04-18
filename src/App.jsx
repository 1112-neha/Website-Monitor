import React from "react";
import { useState } from "react";
import UrlInput from "./components/UrlInput.jsx";
import ChangeList from "./components/ChangeList.jsx";
import AlertBox from "./components/AlertBox.jsx";

export default function App() {
  const [changes, setChanges] = useState([]);
  const [alert, setAlert] = useState("");

  const checkWebsite = (url) => {
    const dummyData = {
      type: "major",
      changes: [
        { text: "Title changed", type: "major" },
        { text: "Footer updated", type: "minor" }
      ]
    };

    setChanges(dummyData.changes);
    setAlert(dummyData.type === "major" ? "⚠️ Major Change Detected!" : "Minor changes");
  };

  return (
    <div>
      <h1>Website Monitor</h1>
      <UrlInput onCheck={checkWebsite} />
      <AlertBox message={alert} />
      <ChangeList changes={changes} />
    </div>
  );
}
