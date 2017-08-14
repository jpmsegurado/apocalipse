import { mount } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer';
import Page from '../components/page';

describe('With Enzyme', () => {
  it('Check if container div will be rendered', () => {
    const app = mount(<Page/>)
    const len = app.find('div.container').length;
    expect(len).toBe(1);
  })
});

describe('With Enzyme', () => {
  it('Check if NO container div will be rendered', () => {
    const app = mount(<Page withoutContainer/>)
    const len = app.find('div.container').length;
    expect(len).toBe(0);
  })
});