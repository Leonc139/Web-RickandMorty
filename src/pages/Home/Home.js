import React from 'react';
import "./HomeStyle.css";

const Home = () => {
  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }}>Rick and Morty Router</h2>
      <div className="poster">
        <img alt="rickandmorty router" src="https://i.guim.co.uk/img/media/b563ac5db4b4a4e1197c586bbca3edebca9173cd/0_12_3307_1985/master/3307.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=61a26bf43da26e4ca97e932e5ee113f7" />
      </div>
    </div>
  )
}

export default Home
