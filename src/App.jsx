
import Container from "./Container";
import { useState } from "react";
import Title from "./Title";

function App() {
  const [isDark, setIsDark] = useState(false);
  function themeToggle() {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      document.body.style.backgroundColor = "hsl(235, 21%, 11%)";
    } else {
      document.body.style.backgroundColor = "#e2e8f0";
    }
    setIsDark(!isDark);
  }
  return (
    <div className="top__lvl__container">
      <div className="main__container mx-auto px-4 md:px-0 my-12 md:my-16 w-full md:w-2/3">
        <Title themeToggle={themeToggle} isDark={isDark}/>
        <Container />
      </div>
    </div>
  );
}

export default App;
