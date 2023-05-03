import React, { useState } from 'react';

const App = () => {
    let localTime = new Date().toLocaleTimeString();
    const[cTime ,updateCTime] = useState(localTime);
    const UpdateTime = ()=>{
        localTime = new Date().toLocaleTimeString();
        updateCTime(localTime);
    }
    return (
     <>
        <h1>{cTime}</h1>
        <button onClick={UpdateTime}>Get Time</button>
     </>
    );
};

export default App;