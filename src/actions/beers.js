import Api from '../api';

const setBeerList = (beers) => {
  return { type: "SET_BEER_LIST", beers };
}

export const getBeers  = () => {
  return dispatch => {
    Api.get('/beers').then(response => {
      let { data: beers } = response;
        dispatch(setBeerList(beers));
      })
      .catch(e => {
        console.log('catch fetch')
        console.log(e)
      });
  }
}

export default { getBeers };
