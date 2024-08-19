import "./index.css";
import React from "react";
import { useState } from "react";

export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="sidebar">
        <ShoppingList />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <img src="./logo.png" alt="logo" className="logo"></img>
      <div className="header-text">
        <h1>Lista zakupów</h1>
        <h3>
          Przygotuj się na zakupy z moją aplikacją - nie zapomnisz niczego !
        </h3>
      </div>
    </div>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function ShoppingList() {
  const [list, setList] = useState([]);

  return (
    <div className="shopping-list">
      <ul>
        <li>sdas</li>
        <li>dsdas</li>
        <li>sdsd</li>
      </ul>
    </div>
  );
}
