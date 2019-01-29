import React, { Component } from 'react';

class App extends Component {

  State = {
    main: 'Drag Queen Soundboard',
    
  }

  render() {

    

    return (
     <div>
       <a href="">About</a>
       <header>{this.State.main}</header>
       <button>Enter</button>
     </div>
    );
  }
}

export default App;
