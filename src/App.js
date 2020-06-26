import React from 'react';
import Header from './components/Header';
import SrollableCards from './components/ScrollableCards';

import API from './API/CONTENTLISTINGPAGE-PAGE1.json';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageData: API.page
    }
  }

  render() {
    return (
      <div className="App">
      <Header title={this.state.pageData.title} />
      <SrollableCards cards={this.state.pageData["content-items"]} />
    </div>
    );
  }
}

export default App;
