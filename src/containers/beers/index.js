import { conect } from 'react-redux'
import List from '../components/list'

const getVisibleBeers = (beers, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
    default:
      return beers
  }
}

const mapStatetoProps = state=> {
  return {
    beers: getVisibleBeers(state.beers, state.visivilityFilter)
  }
}

const mapDispatcheToProps = dispatch => {
  return {
    onBeerClick: id => {
      dispatch(toggleBeer(id))
    }
  }
}

const VisibleBeerList = conect(
  mapStateToPros,
  mapDispatchToProps
)(List)

export default VisibleBeerList
