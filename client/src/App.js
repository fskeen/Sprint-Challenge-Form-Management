import React from 'react';
import './App.css';
import SignUpForm from './components/SignUpForm'
import axios from 'axios';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      recipes: ['']
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

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.recipes.length !== this.state.recipes.length) {
      this.fetchData()
    } else {
      return prevState
    }
  }

  render() {

    return (
      <div className="App">
        <SignUpForm />
      </div>
    );

  }
  
}

export default App;
