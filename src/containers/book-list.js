import React from 'react';
import { connect } from 'react-redux'; // glue for redux and react
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

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

//anythig returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result shld be passed to all of our reduceres
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook. make it available
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
