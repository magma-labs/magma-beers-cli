import React from 'react';

class BeerLogIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { beers: null };
  }

  componentDidMount() {
    let header = new Headers({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'multipart/form-data'
    });
    let sentData = {
      method: 'GET',
      mode: 'cors',
      header: header
    };
    fetch('http://localhost:3000/api/v1/beers', sentData)
      .then(res => res.json())
      .then(beers => {
        console.log('beers => ', beers)
        this.setState({ beers });
      })
      .catch(e => {
        console.log('catch fetch')
        console.log(e)
      });
  }

  render() {
    const { beers } = this.state;
    return (
      <div>
        {beers ? JSON.stringify(beers) : 'Loading...'}
      </div>
      // <table>
      //   <thead>
      //     <tr>
      //       <th>Beer</th>
      //       <th>Date</th>
      //       <th>Quantity</th>
      //     </tr>
      //   </thead>
      // </table>
    );
  }
}

export default BeerLogIndex;
