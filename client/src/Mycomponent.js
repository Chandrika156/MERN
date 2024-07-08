import {Mycontext} from "./Mycontext";
import React, { useContext } from 'react';

export default function Mycomponent(){
    const {text,setText}=useContext(Mycontext)
    //consumer
    return(
        <div>
            <h>{text}</h>
            <button onClick={()=>setText("Hello World")}>Click</button>

        </div>
    )
}