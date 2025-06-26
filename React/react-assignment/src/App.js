import React from 'react';
import './App.css';


// 1. Create and Nest Components (2 examples)

function Header() {
  return <h1>Welcome to React Learning</h1>;
}

function Dashboard() {
  return (
    <div>
      <Header />
      <p>This is your dashboard.</p>
    </div>
  );
}

function Profile() {
  return <h2>This is the Profile Component</h2>;
}

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Profile />
    </div>
  );
}

// 2. Add Markup and Styles (2 examples)

function StyledBox() {
  return (
    <div style={{ backgroundColor: '#dff0d8', padding: '10px' }}>
      This box is styled with inline CSS
    </div>
  );
}

function StyledText() {
  return <p className="highlight">This text is styled using a CSS class</p>;
}


// 3. Display the Data (3 examples)

function UserName() {
  const name = "XYZ";
  return <p>{name}</p>;
}

function CalculateSum() {
  const a = 5, b = 10;
  return <p>Sum of {a} and {b} is {a + b}</p>;
}

function UserDetails() {
  const user = { name: "XYZ", age: 10 };
  return <p>{user.name} is {user.age} years old.</p>;
}


// 4. Render Conditionals and Lists (4 examples)

function LoginStatus({ isLoggedIn }) {
  return <p>{isLoggedIn ? "You are logged in." : "You are logged out."}</p>;
}

function ShowMessage({ show }) {
  return show && <p>Success! You did it!</p>;
}

function TodoList() {
  const todos = ["Eat", "Sleep", "Code"];
  return (
    <ul>
      {todos.map((todo, index) => <li key={index}>{todo}</li>)}
    </ul>
  );
}

function AgeCheck({ age }) {
  if (age < 13) return <p>You are a child.</p>;
  if (age < 20) return <p>You are a teenager.</p>;
  return <p>You are an adult.</p>;
}


// App Component to Combine All

function App() {
  return (
    <div className="App">
      {/* 1. Create and Nest Components */}
      <Dashboard />
      <Profile />


      {/* 2. Add Markup and Styles */}
      <StyledBox />
      <StyledText />

      {/* 3. Display the Data */}
      <UserName />
      <CalculateSum />
      <UserDetails />

      {/* 4. Render Conditionals and Lists */}
      <LoginStatus isLoggedIn={true} />
      <ShowMessage show={true} />
      <TodoList />
      <AgeCheck age={17} />
    </div>
  );
}

export default App;
