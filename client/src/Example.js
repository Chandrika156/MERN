import {Mycontext} from "./Mycontext";
import React, { useState } from 'react';
import Mycomponent from "./Mycomponent" 
import Login from './components/Login' 
export default function Example(){
    const [text,setText]=useState("");
    return(
       <div>
         <Mycontext.Provider value={{text,setText}}>
            <Mycomponent/>
         </Mycontext.Provider>
       </div>


    )

}
