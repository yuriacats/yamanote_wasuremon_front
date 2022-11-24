import React from 'react';
import MainContent from './view/content';

const Header = () => {
  return (
    <header className='
    bg-teal-100
    '>
      <h1 className=" 
      text-3xl
      font-bold 
      underline 
      text-center
      ">
        Yamanote Wasuremon.oo</h1>
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
