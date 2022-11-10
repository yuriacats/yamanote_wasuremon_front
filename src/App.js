import './App.css';
import React from 'react';
import MainContent from './view/content';
import UsePossibleTimetables from './component/ResultTabel';

const Header = () => {
  return (
    <header>
      <h1>Yamanote Wasuremon.oo</h1>
      <p></p>
    </header>
  )
}

class App extends React.Component {
  render() {
    return (
      <div id='app'>
        <Header />
        <MainContent />
      </div>
    )
  }
}

export default App;
