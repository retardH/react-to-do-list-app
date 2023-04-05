import { useState } from "react";
import Input from "./Input";
import List from "./List";

export default function Container() {
  const [input, setInput] = useState("");
  const [lists, setLists] = useState([]);
  const [allLists, setAllLists] = useState([]);

  function showActive() {
    setAllLists(lists);
    setLists(lists.filter((list) => list.done == false));
  }

  function showAll() {
    setLists(allLists);
  }

  function showCompleted() {
    setAllLists(lists);
    setLists(lists.filter((list) => list.done == true));
  }

  function clickHandler(e) {
    if (input == "" || input == undefined || input == null) return;
    setLists([...lists, { text: input, done: false }]);
    setInput("");
  }

  function checkBoxHandler(idx) {
    setLists((prevLists) => {
      return prevLists.map((list, index) => {
        return idx === index ? { ...list, done: !list.done } : list;
      });
    });
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
      <Input input={input} setInput={setInput} clickHandler={clickHandler} />
      <List
        lists={lists}
        clearCompleted={clearCompleted}
        removeIndividualList={removeIndividualList}
        checkBoxHandler={checkBoxHandler}
      />

      <div className="flex justify-center items-center dark:bg-dark__desaturatedBlue bg-light__lightGray shadow-lg rounded-md p-3 md:p-5">
        <span
          className="text-lg dark:text-dark__darkGrayishBlue text-light__daryGrayishBlue font-bold px-4 cursor-pointer dark:hover:text-slate-50 hover:text-zinc-900"
          onClick={showAll}
        >
          All
        </span>
        <span
          className="text-lg dark:text-dark__darkGrayishBlue text-light__daryGrayishBlue font-bold px-4 cursor-pointer dark:hover:text-slate-50 hover:text-zinc-900"
          onClick={showActive}
        >
          Active
        </span>
        <span
          className="text-lg dark:text-dark__darkGrayishBlue text-light__daryGrayishBlue font-bold px-4 cursor-pointer dark:hover:text-slate-50 hover:text-zinc-900"
          onClick={showCompleted}
        >
          Completed
        </span>
      </div>
    </div>
  );
}