import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Movies from './data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList movies={ Movies } />
      </div>
    );
  }
}

export default App;
