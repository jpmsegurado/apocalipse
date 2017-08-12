import { mount } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer';
import Person from '../pages/person';
import userWithInventory from '../__mocks__/user-with-inventory';
import noInventoryUser from '../__mocks__/no-inventory-user';

describe('With Enzyme', () => {
  it('Check table rows', () => {
    const app = mount(<Person person={userWithInventory} />)
    const len = app.find('.inventory-item').length;
    expect(len).toBe(4);
  })
})


describe('With Enzyme', () => {
  it('Check "no inventory items" alert', () => {
    const app = mount(<Person person={noInventoryUser}/>)
    const name = app.find('.alert-warning').text();
    expect(name).toEqual('Este sobrevivente não possuí itens no inventório');
  })
})
