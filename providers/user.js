import axios from 'axios';
import values from './values';

export default class User {

  getFullInfo(id) {
    return axios.get(`${values.baseUrl}api/people.json`).then(resp => axios.get(`${values.baseUrl}api/people/${args.query.id}/properties.json`).then((res) => {
      const person = resp.data.find(p => p.location.split('/').pop() === args.query.id);
      person.items = res.data;
      person.id = person.location.split('/').pop();
      return {
        person,
      };
    }))
  }

}

