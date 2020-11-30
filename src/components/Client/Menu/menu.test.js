import React from 'react';
import {shallow} from 'enzyme';
import Menu from './index';
import {findByTestAttribute} from '../../../utils';


const setUp = (props={}) => {
  const component = shallow(<Menu {...props} />);
  return component;
}

describe('Menu component', () => {

  let component;
  beforeEach(() => {
    component = setUp();
  })

  it('Should render without errors', () => {
    const wrapper = findByTestAttribute(component, 'menu');
    expect(wrapper.length).toBe(1);
  });

})