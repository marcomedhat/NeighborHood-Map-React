import React from "react"


export const getDetails = () => {fetch('https://api.foursquare.com/v2/venues/explore?client_id=5C2B3I0ECECVJL150KLXOBWFH5GYMSHHLXHLF2SQDTO1YR5D&client_secret=ZELI3XHDVO0MHDDR0XFSFARYBG0IKEBBSBJBQHGUOP4JQAQB&v=20180323&limit=1&ll=42.3601,-71.0589&section=sights')
    .then(res => res.json())
    .then(data => data.response.venue)
    .catch(err => console.log('Couldn\'t retrieve venue details with ', err))}