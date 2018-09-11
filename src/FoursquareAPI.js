const api = 'https://api.foursquare.com/v2/venues/';
const version = '20180411';
const lang = 'en';

export const getDetails = (id) =>
  fetch(`${api}${id}?client_id=5C2B3I0ECECVJL150KLXOBWFH5GYMSHHLXHLF2SQDTO1YR5D&client_secret=ZELI3XHDVO0MHDDR0XFSFARYBG0IKEBBSBJBQHGUOP4JQAQB&v=${version}&locale=${lang}`)
    .then(res => res.json())
    .then(data => data.response.venue)
    .catch(err => console.log('Couldn\'t retrieve venue details with ', err))
