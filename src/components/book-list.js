import React from 'react';

export default class BookList extends React.Component {
  renderList() {
    return this.props.books.map((book)=> {
      return (
        <li className="list-group-item">{book.title}</li>
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
