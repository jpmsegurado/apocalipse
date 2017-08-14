import { mount } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer';
import Update from '../pages/update';
import noInventoryUser from '../__mocks__/no-inventory-user';

describe('With Enzyme', () => {
  it("Check if name of the user will be rendered", () => {
    const app = mount(<Update/>);
    app.setState({ user: noInventoryUser });
    expect(app.find('#name').node.value).toEqual(noInventoryUser.name);
  });
});

describe('With Enzyme', () => {
  it("Check if name of the user will be rendered", () => {
    const app = mount(<Update/>);
    app.setState({ user: noInventoryUser });
    expect(app.find('table tbody tr').length).toBe(0);
  });
});
