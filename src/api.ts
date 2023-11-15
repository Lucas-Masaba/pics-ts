import axios from 'axios'

const searchImages = async (term: string) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID its6Qjn9K1vQBl1O8plr1iEX6zXYt7Zn3IBD1MK1GLo'
    },
    params: {
      query: term
    }
  })

  return response.data.results;
}

export default searchImages;