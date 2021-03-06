import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters'
import React, { Component } from 'react';

class App extends Component {
  state = { 
    counters:[
        {id:1, value:0},
        {id:2, value:0},
        {id:3, value:0},
        {id:4, value:0}
    ]
 }

constructor(){
  super();
  console.log("App - Constructor")
}
componentDidMount(){
  console.log("App - component mounted")
}
handleIncrement = counter =>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter)
    counters[index]= {...counter}
    counters[index].value++;
    console.log(this.state.counters[index])
    this.setState({counters})
}

handleDencrement = counter =>{
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter)
  counters[index]= {...counter}
  counters[index].value--;
  counters[index].value =  counters[index].value <= 0 ? 0 : counters[index].value
  console.log(this.state.counters[index])
  this.setState({counters})
}

handleReset = () => {
  const counters = [
    {id:1, value:0},
    {id:2, value:0},
    {id:3, value:0},
    {id:4, value:0}
]
//this.state.counters.map(c => {
      //c.value = 0;
     // return c;
//})
  console.log(counters)
  this.setState({counters})
}
handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id != counterId)
    this.setState({ counters })
    //console.log("handle delete called", counterId)
}
  render() { 
    console.log("App - component rendered")
    return (  
    <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c => c.value > 0 ).length}/> 
        <main className="container"> 
          <Counters counters={this.state.counters} onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete} onDecrement={this.handleDencrement}/> 
        </main>
    </React.Fragment>
    );
  }
}
 
export default App;
