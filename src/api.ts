import axios from 'axios'

const searchImages = async () => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID its6Qjn9K1vQBl1O8plr1iEX6zXYt7Zn3IBD1MK1GLo'
    },
    params: {
      query: 'cars'
    }
  })

  console.log(response);
  return response;
}

export default searchImages;