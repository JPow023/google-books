import React, { Component } from "react";
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import SearchBookDisplay from '../components/SearchBookDisplay';
import axios from 'axios';
import API from "../utils/API";

class Home extends Component {
  state = {
    value: "hello",
    title: "",
    authors: "",
    description: "",
    image: "",
    link: "",
  };

  // componentDidMount = () => {
  //   console.log(this.state.value);
  //   console.log(this.state.searchedBook);
  // }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const api_key = 'AIzaSyDUBA0p1QxdzWAq6Nqc13_IHSQEQU6xvDo';

    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.value + "&key=" + api_key)
      .then(results => {
        console.log(results.data.items[0].volumeInfo);
        this.setState({ title: results.data.items[0].volumeInfo.title });
        this.setState({ authors: results.data.items[0].volumeInfo.authors });
        this.setState({ description: results.data.items[0].volumeInfo.description });
        this.setState({ image: results.data.items[0].volumeInfo.imageLinks.thumbnail });
        this.setState({ link: results.data.items[0].volumeInfo.infoLink });

        // console.log(this.state.authors);
      });
    }

    saveBook = () => {
      API.saveBooks({
          title: this.state.title,
          authors: this.state.authors,
          description: this.state.description,
          image: this.state.image,
          link: this.state.link
      })
        .catch(err => console.log(err));
    }

  render() {

    // console.log(this.state.value);

    return (
      <div>
        <NavBar />
        <SearchBar
          value={this.state.value}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <SearchBookDisplay 
          title={this.state.title}
          authors={this.state.authors}
          description={this.state.description}
          image={this.state.image}
          link={this.state.link}

          saveBook={this.saveBook}
        />
      </div>
    )
  }
}

export default Home;