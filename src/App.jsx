import React, { useState } from 'react';

const App = () =>{
    const yellow = "#18B5F2";
    const [bg , setbg] = useState(yellow);
    const [name , setName] = useState("Click me");

    const bgChange = () =>{
        let newBg = "#900C3F";
        setbg(newBg);
        setName("Yooo");
    }

    const bgAgain = () =>{
        setbg(yellow);
        setName("Welcome back")
    }

    return(
        <>
        <div style={{backgroundColor : bg}}>
            <button onMouseEnter={bgChange} onMouseLeave={bgAgain}>{name}</button>
        </div>
        </>
    )
}

export default App;