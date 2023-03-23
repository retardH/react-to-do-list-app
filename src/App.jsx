//! REFACTOR THE CODE

import { useState } from "react";

function Main() {
  const [input, setInput] = useState("");
  const [lists, setLists] = useState([
    { text: "Walk around the park", done: false },
    { text: "Read for 1 hour", done: false },
  ]);

  const [allLists, setAllLists] = useState([]);

  function showActive() {
    setAllLists(lists);
    setLists(lists.filter(list => list.done == false));
  }

  function showAll() {
    setLists(allLists);
  }

  function showCompleted() {
    setAllLists(lists);
    setLists(lists.filter(list => list.done == true));
  }

  function clickHandler(e) {
    if(input == "" || input == undefined || input == null) return
    setLists([...lists, { text: input, done: false }]);
    setInput("");
  }

  function checkBoxHandler(idx) {
    setLists(prevLists => {
      return prevLists.map((list, index)=> {
        return idx === index ? {...list, done: !list.done} : list;
      })
    })
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
    <div >
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
      <div className="dark:bg-dark__desaturatedBlue bg-light__lightGray rounded-md mb-6 shadow-xl">
        {lists.map((list, index) => (
          <div
            key={index}
            className="dark:border-b-paleBlue border-b-light__veryDarkGrayishBlue flex items-center justify-between p-6 border-b-2"
          >
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={list.done}
                onChange={() => checkBoxHandler(index)}
              />
              <span
                className="text-base dark:text-zinc-200 text-light__veryDarkGrayishBlue tracking-wide pt-1"
                style={list.done ? { textDecoration: "line-through", 
                color: 'hsl(236, 9%, 61%)'} : {}}
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
          <span className="text-base dark:text-dark__darkGrayishBlue text-light__daryGrayishBlue">
            {lists.length} items left
          </span>
          <span
            className="text-base dark:text-dark__darkGrayishBlue text-light__daryGrayishBlue cursor-pointer"
            onClick={clearCompleted}
          >
            Clear Completed
          </span>
        </div>
      </div>
      <div className='flex justify-center items-center dark:bg-dark__desaturatedBlue bg-light__lightGray shadow-xl rounded-md p-3 md:p-5'>
          <span className="text-lg dark:text-dark__darkGrayishBlue text-light__daryGrayishBlue font-bold px-4 cursor-pointer dark:hover:text-paleBlue hover:text-indigo-500" onClick={showAll}>All</span>
          <span className="text-lg dark:text-dark__darkGrayishBlue text-light__daryGrayishBlue font-bold px-4 cursor-pointer dark:hover:text-paleBlue hover:text-indigo-500" onClick={showActive}>Active</span>
          <span className="text-lg dark:text-dark__darkGrayishBlue text-light__daryGrayishBlue font-bold px-4 cursor-pointer dark:hover:text-paleBlue hover:text-indigo-500" onClick={showCompleted}>Completed</span>

      </div>
    </div>
  );
}

function App() {
  const [isDark, setIsDark] = useState(false);
  function themeToggle() {
    document.body.classList.toggle('dark');
    if(document.body.classList.contains('dark')) {
      document.body.style.backgroundColor = 'hsl(235, 21%, 11%)'
      

    } else {
      document.body.style.backgroundColor = 'hsl(236, 33%, 92%)'

    }
    setIsDark(!isDark);
  }
  return (
    <div className="top__lvl__container">
      <div className="main__container mx-auto px-4 md:px-0 my-12 md:my-16 w-full md:w-2/3">
      <div className="top__title py-8 flex justify-between items-center">
        <h2 className="text-white text-3xl font-bold tracking-wide align-middle pt-2">
          T O D O
        </h2>
        {isDark ? 
          (<img src="./images/icon-moon.svg" alt="" className="w-8 cursor-pointer" onClick={themeToggle}/>) :
          (<img src="./images/icon-sun.svg" alt="" className="w-8 cursor-pointer" onClick={themeToggle}/>)
        }
      </div>
      <Main />
      </div>
    </div>
  );
}

export default App;
