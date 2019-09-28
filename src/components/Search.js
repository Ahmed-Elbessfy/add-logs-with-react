import React, { useState } from 'react'

function Search(props) {
  const [search, setSearch] = useState('')
  const handleChange = e => {
    setSearch(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    props.searchLogs(search)
  }

  // Styles
  const searchFormStyle = {
    padding: "1.5rem 2rem",
    border: "1px solid #dedede",
    backgroundColor: "#f9f9f9f9",
    margin: '1.5rem 0'
  };

  const inputStyle = {
    width: "100%",
    fontSize: "1rem",
    padding: "8px",
    border: "1px solid #dedede",
    margin: "0.8rem 0"
  };
  const searchBtnStyle = {
    backgroundColor: "#fff",
    color: "#0d1944",
    border: "1px solid #dedede",
    padding: "0.5rem 1rem",
    textTransform: "capitalize",
    fontSize: "1rem",
    cursor: "pointer"
  };


  return (
    <form onSubmit={ handleSubmit } style={ searchFormStyle }>
      <input
        type="text"
        onChange={ handleChange }
        value={ search }
        placeholder="Search by title"
        style={ inputStyle }
      />
      <button style={ searchBtnStyle }>search</button>
    </form>
  )
}

export default Search



// import React, { Component } from "react";

// class Search extends Component {
//   state = {
//     search: ""
//   };
//   handleChange = e => {
//     this.setState({
//       search: e.target.value
//     });
//   };
//   handleSearch = e => {
//     e.preventDefault();
//     this.props.searchLogs(this.state.search);
//   };


//   render() {
//     // Styles
//     const searchFormStyle = {
//       padding: "1.5rem 2rem",
//       border: "1px solid #dedede",
//       backgroundColor: "#f9f9f9f9",
//       margin: '1.5rem 0'
//     };

//     const inputStyle = {
//       width: "100%",
//       fontSize: "1rem",
//       padding: "8px",
//       border: "1px solid #dedede",
//       margin: "0.8rem 0"
//     };
//     const searchBtnStyle = {
//       backgroundColor: "#fff",
//       color: "#0d1944",
//       border: "1px solid #dedede",
//       padding: "0.5rem 1rem",
//       textTransform: "capitalize",
//       fontSize: "1rem",
//       cursor: "pointer"
//     };


//     return (
//       <form onSubmit={ this.handleSearch } style={ searchFormStyle }>
//         <input
//           type="text"
//           onChange={ this.handleChange }
//           value={ this.state.search }
//           placeholder="Search by title"
//           style={ inputStyle }
//         />
//         <button style={ searchBtnStyle }>search</button>
//       </form>
//     );
//   }
// }

// export default Search;
