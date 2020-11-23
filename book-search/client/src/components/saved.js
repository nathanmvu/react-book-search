import React, { Component } from 'react';
import API from '../utils/API'
import Items from '../components/List/SavedItems'

class Saved extends Component {
  state = {
    books: [],
    title: "",
    authors: "",
    description: "",
    image: "",
    link: ""
  };

  componentDidMount() {
    this.loadBooks()
    console.log('books', this.state.books)
  };

  loadBooks() {
    API.getAllBooks()
      .then(res => {
        console.log(res.data);
        this.setState({ 
          books: res.data, 
          title: res.data.title,
          authors: res.data.author,
          description: res.data.description,
          image: res.data.image,
          link: res.data.link
        })
    })
  };

  render() {
    return (
      <div class='container'>
        {this.state.books.map(book => 
          <Items 
            title={book.title} 
            author={book.authors} 
            description={book.description} 
            link={book.link} 
            image={book.image} 
        />  
        )}      
      </div>
    )
  }

}

export default Saved;