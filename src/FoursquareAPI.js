const api = 'https://api.foursquare.com/v2/venues/';
const version = '20180411';
const lang = 'en';
const clientId = '5C2B3I0ECECVJL150KLXOBWFH5GYMSHHLXHLF2SQDTO1YR5D';
const clientSecret = 'ZELI3XHDVO0MHDDR0XFSFARYBG0IKEBBSBJBQHGUOP4JQAQB';

export const getDetails = (id) =>
  fetch(`${api}${id}?client_id=${clientId}&client_secret=${clientSecret}&v=${version}&locale=${lang}`)
    .then(res => res.json())
    .then(data => data.response.venue)
    .catch(err => console.log('Couldn\'t retrieve venue details with ', err))
