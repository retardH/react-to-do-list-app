import React, { useContext } from "react";
import { AllContext } from "./Context&ReducerProvider";

export default function List() {
  const {lists, dispatch} = useContext(AllContext);
  return (
    <div className="dark:bg-dark__desaturatedBlue bg-light__lightGray rounded-md mb-6 shadow-md">
      {lists.map((list, index) => (
        <div
          key={index}
          className="dark:border-b-paleBlue border-b-light__veryDarkGrayishBlue flex items-center justify-between p-6 border-b-2"
        >
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={list.done}
              onChange={(e) => {
                dispatch({
                  type: 'check',
                  id: index,
                  list: {
                    ...list,
                    done: e.target.checked,
                  }
                })
              }}
            />
            <span
              className="text-base dark:text-zinc-200 text-light__veryDarkGrayishBlue tracking-wide pt-1"
              style={
                list.done
                  ? {
                      textDecoration: "line-through",
                      color: "hsl(236, 9%, 61%)",
                    }
                  : {}
              }
            >
              {list.text}
            </span>
          </div>
          <img
            src="./images/icon-cross.svg"
            alt=""
            className="w-4 cursor-pointer"
            onClick={() => {
              dispatch({
                type: 'delete',
                id: index,
              })
            }}
          />
        </div>
      ))}
      <div className="p-6 flex justify-between">
        <span className="text-base dark:text-dark__darkGrayishBlue text-light__daryGrayishBlue">
          {lists.length} items left
        </span>
        <span
          className="text-base dark:text-dark__darkGrayishBlue text-light__daryGrayishBlue cursor-pointer"
          onClick={() => {
            dispatch({
              type: 'clear-all'
            })
          }}
        >
          Clear Completed
        </span>
      </div>
    </div>
  );
}
