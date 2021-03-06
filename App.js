import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

// higher order function ES5
// function isSearched(searchTerm) {
//     return function (item) {
//         return item.title.toLowerCase().includes(searchTerm.toLowerCase());
//
//     }
// }

// ES6 fucntion
const isSearched = searchTerm => item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      list,
      searchTerm: '',
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value })
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  render() {
    const helloWorld = 'Welcome to the Road to learn React';
    var person = {firstName: "Tadas", lastName: "Davidsonas"};
    const { searchTerm, list } = this.state;
    return (
      <div className="App">
        <Search
            value={searchTerm}
            onChange={this.onSearchChange}
        >
            Search
        </Search>
        <Table
            list={list}
            pattern={searchTerm}
            onDismiss={this.onDismiss}
        />

        {/*<h2>{helloWorld}</h2>*/}
        {/*<p>*/}
          {/*The user learning this course is {person.firstName} {person.lastName}<br/>*/}
          {/*module.hot helps to make refresh without reloading the page*/}
        {/*</p>*/}
          {/*<form>*/}
              {/*<input*/}
                  {/*type="text"*/}
                  {/*value={searchTerm}*/}
                  {/*onChange={this.onSearchChange}*/}
              {/*/>*/}
          {/*</form>*/}

        {/*{this.state.list.filter(isSearched(this.state.searchTerm)).map(item =>*/}
            {/*<div key={item.objectID}>*/}
              {/*<span>*/}
                {/*<a href={item.url}>{item.title}</a>*/}
              {/*</span>*/}
              {/*<span>{item.author}</span>*/}
              {/*<span>{item.num_comments}</span>*/}
              {/*<span>{item.points}</span>*/}
              {/*<span>*/}
                {/*<button*/}
                    {/*onClick={() => this.onDismiss(item.objectID)}*/}
                    {/*type="button">*/}
                        {/*Dismiss*/}
                {/*</button>*/}
              {/*</span>*/}
            {/*</div>*/}
        {/*)}*/}

      </div>
    );
  }
}

class Search extends Component {
    render() {
        const {value, onChange, children} = this.props;
        return (
            <form>
                {children} <input
                    type="text"
                    value={value}
                    onChange={onChange}
                />
            </form>
        );
    }
}

class Table extends Component {
    render() {
        const {list, pattern, onDismiss} = this.props;
        return (
            <div>
                {list.filter(isSearched(pattern)).map(item =>
                    <div key={item.objectID}>
                        <span>
                            <a href={item.url}>{item.title}</a>
                        </span>
                        <span>{item.author}</span>
                        <span>{item.num_comments}</span>
                        <span>{item.points}</span>
                        <span>
                            <Button onClick={() => onDismiss(item.objectID)}>
                                Dismiss
                            </Button>
                        </span>
                    </div>
                )}
            </div>
        )
    }
}

/**
 * Reusable Button component
 */
class Button extends Component {
    render() {
        const {
            onClick,
            className = '',
            children,
        } = this.props;

        return (
            <button
                onClick={onClick}
                className={className}
                type="button"
            >
                {children}
            </button>
        );
    }
}

export default App;
