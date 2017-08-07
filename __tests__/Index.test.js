import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer';
import Index from '../pages/index';


describe('With Enzyme', () => {
  it('Label shows "Usuário"', () => {
    const app = shallow(<Index />)

    expect(app.find('label').text()).toEqual('Usuário')
  })
})

describe('With Snapshot Testing', () => {
  it('Label shows "Usuário"', () => {
    const component = renderer.create(<Index />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})