import React from 'react';

class BeerLogIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { response: null };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:3000/api/v1/beer_logs')
      .then(res => {
        console.log('then fetch')
        let response = res.json();
        this.setState({ response });
      })
      .catch(e => {
        console.log('catch fetch')
        console.log(e)
      });
  }

  render() {
    const { response } = this.state;
    return (
      <div>
        {response ? response : 'Loading...'}
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
