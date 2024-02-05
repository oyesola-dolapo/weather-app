import { useState } from "react";
import "./App.css";
import Weather from "./components/Weather";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Weather />
    </main>
  );
}

export default App;
