
import './App.css';
import React, { useState } from "react";
import logo from './images/flower.jpg';


/**
  Challenge: Display all users to the browser
**/

const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 }
];
const usernames = users.map((user) => {
  return <h1 key={user.id}>{user.name}</h1>;
});
/** 
// comment this out after completion and uncomment code below it to proceed
function Child({func}) {
  return <div>
    This is children content
    <button onClick={()=>func('I need to be updated from my child')}>Change</button>
  </div>;
}
*/
  //Challenge: Uncomment this code to complete quiz

  function Child({onButtonClick}) {
    return (
      <>
        <div>Child</div>
        <button onClick={onButtonClick}>Change Parent Value</button>
      </>
    );
  }
  function Parent() {
    const [value, setValue] = React.useState(
      "I need to be updated from my child"
    );
    function handleClick(){
      setValue('Updated from the child')
    }
    return (
      <> 
        <h3>Update Parent State Challenge (Using Callback)</h3>
        <div className="wrapper">
          <div>Parent</div>
          <Child />
          <div className="box-wrapper">{value}</div>
        </div>
  
        <div className="wrapper">
          <Child onButtonClick={handleClick}/>
        </div>
      </>
    );
  }

//Uncomment this to tackle quiz

/* 
//Comment out after completion
function Parent() {
  return (
    <div>
      <h3>Parent Component</h3>
    </div>
  );
}
*/ 
// Comment above code after completion

function App() {
    
  const [toggleChallenge, setToggleChallenge] = useState(false);
  
  
  function handleClick() {
    setToggleChallenge(toggleChallenge ? "" : "Toggle Challenge")
    return toggleChallenge
  }

  
  return (
    
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>JSX is cool!</h1>
      <h3>User names</h3>
      <ul>{usernames}</ul>
      <button onClick={handleClick} > { toggleChallenge ? 'Hide Element Below' : 'Show Element' } </button>
  
  <div>{toggleChallenge}</div>
  <Parent>
  <Child />
  </Parent>
</>
);
}
     

export default App;
