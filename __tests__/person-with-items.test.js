import { mount } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer';
import Person from '../pages/person';
import userWithInventory from '../__mocks__/user-with-inventory';

describe('With Enzyme', () => {
  it('Check table rows', () => {
    const app = mount(<Person person={userWithInventory} />)
    const len = app.find('.inventory-item').length;
    expect(len).toBe(4);
  })
})
