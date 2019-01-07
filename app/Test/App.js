import React from 'react';



const App = props => ({
  render() {
    return (
      <div className="App">
        <h1>header</h1>
        <main>{props.children}</main>
        <h1>footer</h1>    
      </div>
    );
  }
});

export default App;
