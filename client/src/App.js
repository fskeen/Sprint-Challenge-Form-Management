import React from 'react';
import './App.css';
import axios from 'axios';

import SignUpForm from './components/SignUpForm'
import RecipeList from './components/RecipeList'

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      recipes: [''],
      loggedIn: false
    };
  }

  fetchData = () => {
    axios.get(`http://localhost:5000/api/restricted/data`)
      .then (res => {
        console.log(res);
        this.setState({recipes: res.data});
      })
      .catch (err => console.log("Error getting data from server: ", err))
      
  }

  fakeLogin = () => {
    this.setState({loggedIn: true});
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.recipes.length !== this.state.recipes.length) {
      this.fetchData()
    } else {
      return prevState;
    }
  }

  render() {

    return (
      <div className="App">
        <SignUpForm fakeLogin={this.fakeLogin} />
        <RecipeList recipes={this.state.recipes}/>
      </div>
    );

  }
  
}

export default App;
