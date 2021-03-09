import { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

export interface Monster {
  id: string;
  name: string;
  email: string;
}

export interface AppState {
  search: string;
  monsters: Monster[];
}

class App extends Component<{}, AppState> {
  constructor() {
    super({});

    this.state = {
      search: "",
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((users) => {
        this.setState({ monsters: users });
      });
  }

  searchList = (event: { target: HTMLInputElement }) => {
    this.setState({
      search: event.target.value,
    });
  }

  render() {
    const { monsters, search } = this.state;
    const filteredMonsters = monsters.filter((_) =>
      _.name.toLowerCase().includes(search.toLowerCase())
    );
    
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox handleChange={this.searchList} placeholder="Search for monsters" />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
