import React from "react";
import {CgPlayListAdd} from 'react-icons/cg'

export default function Input({input, setInput, clickHandler}) {

    return (
        <div className="flex bg-light__lightGray dark:bg-dark__desaturatedBlue px-6 py-4 justify-between rounded-md mb-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={(e) => {
            if(e.key === 'Enter') {
              clickHandler();
            }
          }}
          placeholder="Create a new todo ....."
          className="w-2/3 bg-transparent focus:bg-transparent focus:outline-none dark:text-dark__lightGrayishBlue text-light__veryDarkGrayishBlue text-lg flex-1"
        />
          <CgPlayListAdd onClick={clickHandler} className="dark:text-light__lightGray text-3xl text-dark__desaturatedBlue cursor-pointer"/>
        
      </div>
    )
} 