import axios from 'axios';
import values from './values';

export default class User {

  getFullInfo = id => axios.get(`${values.baseUrl}api/people.json`).then(resp => axios.get(`${values.baseUrl}api/people/${id}/properties.json`).then((res) => {
    const person = resp.data.find(p => p.location.split('/').pop() === id);
    person.items = res.data;
    person.id = person.location.split('/').pop();
    return {
      person,
    };
  }), () => {});

}

