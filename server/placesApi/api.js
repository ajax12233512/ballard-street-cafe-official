import { Client, PlaceInputType }from '@googlemaps/google-maps-services-js'
import 'dotenv/config'
const key = process.env.MAPS_KEY
const client = new Client();

let finalData;

const fetchData = () => {
  return client
  .findPlaceFromText({
    params: {
        input: "Ballard Street Cafe",
        inputtype: PlaceInputType.textQuery,
        key: key,
        fields: ["place_id", "name", "formatted_address"],
    },
  })
  .then(async r => {
    finalData = await getReview(r)
  })
  .catch(e => {
    console.log(e)
  });
}

const getReview = (r) => {
    const id = r.data.candidates[0].place_id;
    return client
    .placeDetails({
        params : {
            place_id: id,
            key: key
        }
    }).then(r => {
        const theData = r.data.result;
        // finalData = theData
        // console.log('theData', theData);
        return theData;
    }).catch(err => console.log(err))
}

export const ballard = async () =>{
  await fetchData();
//   console.log("finalData", await finalData);
  return finalData;
}