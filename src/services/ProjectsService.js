import axios from 'axios'



// const Axios = axios.create({
//   baseURL: "https://api.airtable.com/v0/appBNGFU3NQ5tnUMT/Projects"
// });

// const apiKey = 'keyYMt66S09U6do5K'


const Axios = axios.create({
  baseURL: "https://api.airtable.com/v0/apphe3uztvfMhGv7g/Projects"
});

const apiKey = 'key8deNGwlJZTmXap'

Axios.defaults.headers.common = {'Authorization': `Bearer ` + apiKey}

export default{
  getProjects() {
    return Axios.get()
  }
}