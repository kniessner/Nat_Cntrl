import React from 'react';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = { hits: null };
  }

  onSearch = (e) => {
    e.preventDefault();

    const { value } = this.input;

    if (value === '') {
      return;
    }

    fetch('https://hn.algolia.com/api/v1/search?query=' + value)
      .then(response => response.json())
      .then(result => this.onSetResult(result));
  }

  onSetResult = (result) => {
    this.setState({ hits: result.hits });
  }

  render() {
    return (
      <div>
        <h1>Search Hacker News with Local Storage</h1>
        <p>There shouldn't be a second network request, when you search for something twice.</p>

        <form type="submit" onSubmit={this.onSearch}>
          <input type="text" ref={node => this.input = node} />
          <button type="button">Search</button>
        </form>

        {
          this.state.hits &&
          this.state.hits.map(item => <div key={item.objectID}>{item.title}</div>)
        }
      </div>
    );
  }
}

export default Search;
