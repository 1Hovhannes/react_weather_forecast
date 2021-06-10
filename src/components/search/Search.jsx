import React from "react";

class Search extends React.Component {
  render() {
    return (
      <>
        <div className="heading">Weather Forecast</div>
        <form className="search-form" onSubmit={this.props.handleClick}>
          <input
            type="text"
            placeholder="Search Weather by City"
            value={this.props.searchInput}
            onChange={(e) => this.props.handleChange(e)}
          />
          <button type="submit">Search</button>
        </form>
      </>
    );
  }
}

export default Search;
