const api = 'https://api.foursquare.com/v2/venues/';
const version = '20180411';
const lang = 'en';
const clientId = 'ODQMNY5FDQMREIKMDWL1OZI2L52TLTRNVJX0HISD1Y5NLSAV';
const clientSecret = 'TRPVEKGCJQUM3LALNDL4G0FIIIAUGVC4BP3IHZRBPB4CGBF0';

export const getDetails = (id) =>
  fetch(`${api}${id}?client_id=${clientId}&client_secret=${clientSecret}&v=${version}&locale=${lang}`)
    .then(res => res.json())
    .then(data => data.response.venue)
    .catch(err => console.log('Couldn\'t retrieve venue details with ', err))
