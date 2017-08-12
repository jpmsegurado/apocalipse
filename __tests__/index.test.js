import { mount } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer';
import Index from '../pages/index';
import people from '../__mocks__/people';

describe('With Enzyme', () => {
  it('Check how many rows is rendered on table of people', () => {
    const app = mount(<Index itens={people}/>)
    const len = app.find('tr.clickable').length;
    expect(len).toBe(2);
  })
});

describe('With Enzyme', () => {
  it('Check if no rows will be rendered', () => {
    const app = mount(<Index itens={[]}/>)
    const len = app.find('tr.clickable').length;
    expect(len).toBe(0);
  })
});