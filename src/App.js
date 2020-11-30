import React from 'react';
import NavBar from './component/NavBar'
import './App.css';
import Home from './component/Home';
import AlbumPage from './component/AlbumPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {
  


  render(){
  return (
    <div className="App">
      <header className="App-header">
        <Router>
        <NavBar/>
          <Route path="/" exact component={Home} />
          <Route path="/yourlibrary" exact component={AlbumPage} />
       
       <AlbumPage />
       </Router>
      </header>
    </div>
  );
}
}
export default App;
