import { useState } from "react";
import Input from "./Input";
import List from "./List";
import { useReducer } from "react";
import Footer from "./Footer";
import {AllContext, listsReducer} from "./Context&ReducerProvider";

export default function Container() {
  const [allLists, setAllLists] = useState([]);
  const [lists, dispatch] = useReducer(listsReducer, [
    { text: "To make a must-do-lists", done: false },
  ]);
  const value = {
    lists,
    allLists,
    dispatch,
    setAllLists
  }
  return (
    <AllContext.Provider value={value}>
      <Input/>
      <List/>
      <Footer/>
    </AllContext.Provider>
  );
}
