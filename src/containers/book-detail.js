import React from 'react';
import { connect } from 'react-redux';

class BookDetail extends React.Component {
  render() {
    return (
      <div>Book Detail</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect (mapStateToProps)(BookDetail);
