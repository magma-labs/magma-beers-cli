import React from 'react'
import List from '../widgets/list'
import { connect } from 'react-redux'
import { getBeers } from '../../actions/beers';
// TODO: getBeers

import axios from 'axios';

class BeerLogIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getBeers();
  }

  render() {
    const { beers } = this.props;
    return (
      <div>
        {/* {beers ? JSON.stringify(beers) : 'Loading...'} */}
        <List items={beers} />
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

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps  = (dispatch) => {
  return {
    getBeers: () => dispatch(getBeers())
  }
}

BeerLogIndex.defaultProps = {
  beers: []
}
export default connect(mapStateToProps, mapDispatchToProps)(BeerLogIndex);
