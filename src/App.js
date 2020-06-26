import React, { lazy, Suspense } from "react";
import Header from "./components/Header";
// import SrollableCards from './components/ScrollableCards';

import API from "./API/CONTENTLISTINGPAGE-PAGE1.json";

import "./App.scss";

const SrollableCards = lazy(() => import("././components/ScrollableCards"));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageData: API.page || {}
    };
  }

  render() {
    return (
      <div className='App'>
        {this.state.pageData && this.state.pageData.title && (
          <Header title={this.state.pageData.title} />
        )}
        <Suspense fallback={<h2 className='App__loading'>Still Loading…</h2>}>
          {this.state.pageData && this.state.pageData["content-items"] && (
            <SrollableCards cards={this.state.pageData["content-items"]} />
          )}
        </Suspense>
      </div>
    );
  }
}

export default App;
