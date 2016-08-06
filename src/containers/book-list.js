import React from 'react';
import { connect } from 'react-redux'; // glue for redux and react

class BookList extends React.Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-md-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {//connect function
  //whatever is returned will show up as props
  // inside of BookList
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList);
