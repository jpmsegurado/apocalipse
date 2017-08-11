import { mount } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer';
import Person from '../pages/person';

const user = {
  "location":"http://zssn-backend-example.herokuapp.com/api/people/1be1b03f-6ef6-475e-a47e-118397b8fee9",
  "name":"Test0001",
  "age":200,
  "gender":"M",
  "lonlat":"POINT (-8.610671432496792 -56.24600535258651)",
  "created_at":"2016-08-08T05:28:07.969Z",
  "updated_at":"2016-12-28T16:57:15.573Z",
  "infected?":true,
  "items":[],
  "id":"1be1b03f-6ef6-475e-a47e-118397b8fee9"
};

describe('With Enzyme', () => {
  it('Check table rows', () => {
    const app = mount(<Person person={user}/>)
    const name = app.find('.alert-warning').text();
    expect(name).toEqual('Este sobrevivente não possuí itens no inventório');
  })
})
