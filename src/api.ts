import axios from 'axios'

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDU1Njc5MjIyYWNjMWFkNjQzMmE2OWZkZTQ0NjczYiIsInN1YiI6IjY1MzZmNzQ1MWY3NDhiMDBlMjIyNDVlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KuzjcBasNd2eUmKpL-Z02fFADwrJtTWLjgva8nO5zSw'
const apiKey = 'e455679222acc1ad6432a69fde44673b'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

api.interceptors.request.use((config) => {
  config.params = config.params || {}
  config.params.api_key = apiKey
  return config
})

export default api
