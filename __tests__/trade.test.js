import { mount } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer';
import Trade from '../pages/trade';
import userWithInventory from '../__mocks__/user-with-inventory';
import noInventoryUser from '../__mocks__/no-inventory-user';

describe('With Enzyme', () => {
  it("Check how many rows is rendered on person's inventory table ", () => {
    const app = mount(<Trade person={userWithInventory}/>)
    const len = app.find('.table-person tbody tr').length;
    expect(len).toBe(4);
  })
})

describe('With Enzyme', () => {
  it('Check if person inventory table is empty', () => {
    const app = mount(<Trade person={noInventoryUser}/>)
    const len = app.find('.table-person tbody tr').length;
    expect(len).toBe(0);
  })
})