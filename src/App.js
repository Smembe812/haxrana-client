import React, { Component } from 'react';
import logo from './logo.svg';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './App.css';

class App extends Component {
  state = {albums: [], appName: "Rana's Chime"}

  componentDidMount(){
    fetch('/albums')
      .then(res => res.json())
      .then(albums => this.setState({albums}))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.appName}</h1>
        </header>
        <h3>Albums</h3>
        <ListGroup>
        {this.state.albums.map(album =>
            <ListGroupItem key={album.id}>{album.name}</ListGroupItem>
        )}
        </ListGroup>
      </div>
    );
  }
}

export default App;
