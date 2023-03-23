import React from "react";

export default function Input({input, setInput, clickHandler}) {

    return (
        <div className="flex bg-light__lightGray dark:bg-dark__desaturatedBlue px-6 py-4 justify-between rounded-md mb-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Create a new todo ....."
          className="w-2/3 bg-transparent focus:bg-transparent focus:outline-none dark:text-dark__lightGrayishBlue text-light__veryDarkGrayishBlue"
        />
        <button
          className="add-btn rounded-md py-2 px-3 font-bold"
          onClick={clickHandler}
        >
          Add
        </button>
      </div>
    )
}