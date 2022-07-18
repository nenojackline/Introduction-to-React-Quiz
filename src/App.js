import React from "react";
import logo from './logo.svg';
import './App.css';

/**
  Challenge: Display all users to the browser
**/

const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 }
];
const userList = users.map((user) => {
  return <h1 key={user.id}>{user.name}</h1>;
});

// comment this out after completion and uncomment code below it to proceed
function Child({func}) {
  return <div>
    This is children content
    <button onClick={()=>func('I need to be updated from my child')}>Change</button>
  </div>;
}
  //Challenge: Uncomment this code to complete quiz

function Child() {
  return (
    <>
      <div>Child</div>
      <button>Change Parent Value</button>
    </>
  );
}

function Parent() {
  const [value, setValue] = React.useState(
    "I need to be updated from my child"
  );

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child />
      </div>
    </>
  );
}
//Uncomment this to tackle quiz


// Comment out after completion
function Parent() {
  return (
    <div>
      <h3>Parent Component</h3>
    </div>
  );
}
// Comment above code after completion

function App() {
  const [] = React.useState(true);
  const element = <h1>JSX is cool!</h1>
  const [hideElement, setHideElement] = useState(true);

  const toggle = () => {
    setHideElement(false)
  }
  return (
    
    <>
    
    <img src={logo} className="App-logo" alt="logo" />
      <h3>User names</h3>
      <ul></ul>
      <button>Hide Element Below</button>

      <div>Toggle Challenge</div>
      <Parent>
      <Child />
    </Parent>
    </>
  );
}

export default App;
