import React from 'react'
import List from '../widgets/list'
import { connect } from 'react-redux'
import { getBeers } from '../../actions/beers';
// TODO: getBeers

class BeerLogIndex extends React.Component {
  constructor(props) {
    super(props);
    this.loadBeers = this.loadBeers.bind(this);
  }

  componentDidMount() {
    // this.props.getBeers();
  }

  loadBeers() {
    this.props.getBeers();
  }

  render() {
    const { beers } = this.props;
    return (
      <div>
        <List items={beers} />
        <button onClick={ this.loadBeers } >LoadBeers </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    beers: state.beersReducer.beers
  }
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
