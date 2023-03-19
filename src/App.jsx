//! BUGS: lists moves when a list is checked(done), and also when unchecked

import { useState } from "react";

function Main() {
  const [input, setInput] = useState("");
  const [lists, setLists] = useState([
    { text: "Walk around the park", done: false },
    { text: "Read for 1 hour", done: false },
  ]);


  function clickHandler(e) {
    setLists([...lists, { text: input, done: false }]);
    setInput("");
  }

  function checkBoxHandler(idx) {
    const newArr = lists.filter((list, index) => {
      return index != idx;
    });
    const doneObj = lists[idx];
    if (doneObj.done) {
      doneObj.done = false;
      setLists([...newArr, doneObj]);
    } else {
      doneObj.done = true;
      setLists([doneObj, ...newArr]);
    }
  }

  function clearCompleted() {
    const filterLists = lists.filter((list) => {
      return list.done == false;
    });

    setLists(filterLists);
  }

  function removeIndividualList(idx) {
    const newLists = [...lists];
    newLists.splice(idx, 1);
    setLists(newLists);
  }

  return (
    <div>
      <div className="flex bg-dark__desaturatedBlue p-6 justify-between rounded-md mb-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Create a new todo ....."
          className="w-2/3 bg-transparent focus:bg-transparent focus:outline-none text-dark__lightGrayishBlue"
        />
        <button
          className="add-btn rounded-md py-2 px-3 font-bold"
          onClick={clickHandler}
        >
          Add
        </button>
      </div>
      <div className="bg-dark__desaturatedBlue rounded-md mb-6">
        {lists.map((list, index) => (
          <div
            key={index}
            className="border-b-paleBlue flex items-center justify-between p-6 border-b-2"
          >
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={list.done}
                onChange={() => checkBoxHandler(index)}
              />
              <span
                className="text-base text-zinc-200 tracking-wide pt-1"
                style={list.done ? { textDecoration: "line-through", 
                color: 'hsl(234, 11%, 52%)'} : {}}
              >
                {list.text}
              </span>
            </div>
            <img
              src="./images/icon-cross.svg"
              alt=""
              className="w-4 cursor-pointer"
              onClick={() => removeIndividualList(index)}
            />
          </div>
        ))}
        <div className="p-6 flex justify-between">
          <span className="text-base text-dark__darkGrayishBlue">
            {lists.length} items left
          </span>
          <span
            className="text-base text-dark__darkGrayishBlue cursor-pointer"
            onClick={clearCompleted}
          >
            Clear Completed
          </span>
        </div>
      </div>
      <div className='flex justify-center items-center bg-dark__desaturatedBlue rounded-md p-5'>
          <span className="text-lg text-dark__darkGrayishBlue font-bold px-4 cursor-pointer hover:text-paleBlue">All</span>
          <span className="text-lg text-dark__darkGrayishBlue font-bold px-4 cursor-pointer hover:text-paleBlue">Active</span>
          <span className="text-lg text-dark__darkGrayishBlue font-bold px-4 cursor-pointer hover:text-paleBlue">Completed</span>

      </div>
    </div>
  );
}

function App() {
  return (
    <div className="main__container mx-auto px-4 md:px-0 my-16  w-full md:w-2/3">
      <div className="top__title py-8 flex justify-between items-center">
        <h2 className="text-white text-3xl font-bold tracking-wide align-middle pt-2">
          T O D O
        </h2>
        <img src="./images/icon-sun.svg" alt="" className="w-8" />
      </div>
      <Main />
    </div>
  );
}

export default App;
