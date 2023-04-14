import React, { useContext } from "react";
import { ThemeContext } from "./Context&ReducerProvider";

export default function Title() {
  const {themeToggle, isDark} = useContext(ThemeContext);
  return (
    <div className="top__title py-8 flex justify-between items-center">
      <h2 className="text-white text-3xl font-bold tracking-wide align-middle pt-2">
        T O D O
      </h2>
      {isDark ? (
        <img
          src="./images/icon-moon.svg"
          alt=""
          className="w-8 cursor-pointer"
          onClick={themeToggle}
        />
      ) : (
        <img
          src="./images/icon-sun.svg"
          alt=""
          className="w-8 cursor-pointer"
          onClick={themeToggle}
        />
      )}
    </div>
  );
}
