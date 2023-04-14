import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const fname = "Sk";
const lname = "Alamin";
// const currentDate = new Date().toLocaleDateString();
// const currentTime =  new Date().toLocaleTimeString();
root.render(
  //  <React.StrictMode>
  //    <App />
  //   </React.StrictMode>
//  <h1> Date is ={currentDate}</h1>
//   <h1>Time is = {currentTime}</h1>

  <><h1 className='heading'> {` I am  ${fname} ${lname}`}</h1>
  <div className='imgCss'>
  <img src='https://picsum.photos/200/300' alt='randomImage'/>
  <img src='https://picsum.photos/250/300' alt='randomImage'/>
  <img src='https://picsum.photos/300/300' alt='randomImage'/></div>
  
  </>
);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
 