import React from "react";
import { useState } from "react";
import {CgPlayListAdd} from 'react-icons/cg'

export default function Input({dispatch}) {

    const [text, setText] = useState('');
    return (
        <div className="flex bg-light__lightGray dark:bg-dark__desaturatedBlue px-6 py-4 justify-between rounded-md mb-6">
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          onKeyUp={(e) => {
            if(e.key === 'Enter') {
              setText('');
              dispatch({
                type: 'add',
                text: text,
              })
            }
          }}
          placeholder="Create a new todo ....."
          className="w-2/3 bg-transparent focus:bg-transparent focus:outline-none dark:text-dark__lightGrayishBlue text-light__veryDarkGrayishBlue text-lg flex-1"
        />
          <CgPlayListAdd onClick={() => {
            setText('');
            dispatch({
              type: 'add',
              text: text,
            })
          }} 
          className="dark:text-light__lightGray text-3xl text-dark__desaturatedBlue cursor-pointer"/>
        
      </div>
    )
} 