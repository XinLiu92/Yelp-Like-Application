import React from 'react';


class TestApp extends React.Component{
    constructor(props) {
        super(props);
      }
    
    render(){
        return (
            <div className="App">
              <h1>header</h1>
              <main>{this.props.children}</main>
              <h1>footer</h1>    
            </div>
          );
    }
}

export default TestApp;