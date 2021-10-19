
import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
    
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  handleChange = (e)=>{
    this.setState({searchField: e.target.value})
  }
  render() {
    const {monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monsters =>
      monsters.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <h1>facess</h1>
        <input type='search' placeholder='search monsters'
        onChange={this.handleChange} />
        <CardList monsters={filteredMonsters}>
       
        </CardList>
      </div>
    );  
  }
}
export default App;
