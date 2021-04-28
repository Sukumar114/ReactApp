import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
   
      name: 'Krishna', 
      password: ''
     
    }

  switchNameHandler = ( event,newName) => {
    console.log('Was changed!');
    this.setState({name:event.target.value,password:newName})
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    // this.setState( {
    //   persons: [
    //     { name: event.target.value},
    //     // { name: 'Manu', age: 29 },
    //     // { name: 'Stephanie', age: 27 }
    //   ]
    // } )
  }

   nameChangedHandler = () => {
         this.setState({name:'Ram'})
         console.log("I am God")
   }

  // togglePersonsHandler = () => {
   
  //   this.setState( { showPersons: !doesShow } );
  // }

  // componentDidMount () {
  //   axios.get( 'https://jsonplaceholder.typicode.com/posts' )
  //       .then( response => {
  //          // const posts = response.data.slice(0, 4);
  //          /*  const updatedPosts = posts.map(post => {
  //               return {
  //                   ...post,
  //                   author: 'Max' */
  //               }
  //           )};
  //          // this.setState({posts: updatedPosts});
  //           // console.log( response );
  //    //   } );


  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
  

   return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person
          name={this.state.name}
          password={this.state.password} 
         click={()=>this.nameChangedHandler}
          changed1={(event)=>this.switchNameHandler(event,'vishal')}
          // changed2={(event)=> this.setState( {password: event.target.value})}
          />
      
        
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  
}
}

export default App;
