import React, { useState } from 'react';

const App = () => {
    let localTime = new Date().toLocaleTimeString();
    const[cTime ,updateCTime] = useState(localTime);
    const UpdateTime = ()=>{
        localTime = new Date().toLocaleTimeString();
        updateCTime(localTime);
    }
    setInterval(UpdateTime ,1000);
    return (
     <>
        <h1>{cTime}</h1>
     </>
    );
};

export default App;