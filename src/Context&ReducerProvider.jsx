import { createContext } from "react";

export const AllContext = createContext({});

export const ThemeContext = createContext('light');

export function listsReducer(lists, action) {
    switch (action.type) {
      
      case "add": {
        return [
          ...lists,
          {
            text: action.text,
            done: false,
          },
        ];
      }
  
      case "delete": {
        const newLists = [...lists];
        newLists.splice(action.id, 1);
        return newLists;
      }
  
      case "check": {
        return lists.map((list, idx) => {
          if (idx === action.id) {
            return action.list;
          } else {
            return list;
          }
        });
      }
  
      case "clear-all": {
        return lists.filter((list) => list.done === false);
      }
  
      case "show-active": {
        return lists.filter((list) => list.done === false);
      }
  
      case "show-all": {
        return action.list;
      }
  
      case "show-completed": {
        return lists.filter((list) => list.done === true);
      }
    }
  }
  


 
