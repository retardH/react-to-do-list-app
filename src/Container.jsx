import { useState } from "react";
import Input from "./Input";
import List from "./List";
import { useReducer } from "react";
import listsReducer from "./listsReducer";
import Footer from "./Footer";

export default function Container() {
  const [allLists, setAllLists] = useState([]);
  const [lists, dispatch] = useReducer(listsReducer, [
    { text: "GO for a walk", done: false },
  ]);

  return (
    <div>
      <Input dispatch={dispatch} />
      <List lists={lists} dispatch={dispatch} />
      <Footer dispatch={dispatch} lists={lists} allLists={allLists} setAllLists={setAllLists}/>
    </div>
  );
}
