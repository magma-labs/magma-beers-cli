import * as Api from './api/main';

const getBeers  = () => {
  // return { type: XXX" }
  // return console.log("request beers");
  //
  debugger;
  Api.getBeers().then(res => res.json())
    .then(beers => {
      console.log('beers => ', beers)
      // dispatch(setBeerList());
    })
    .catch(e => {
      console.log('catch fetch')
      console.log(e)
    });
}

export { getBeers };
