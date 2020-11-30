import React from 'react';
import {shallow} from 'enzyme';
import Client from './index';
import {findByTestAttribute} from '../../utils';


const setUp = (props={}) => {
  const component = shallow(<Client {...props} />);
  return component;
}

describe('Client component', () => {

  let component;
  beforeEach(() => {
    component = setUp();
  })

  it('Should render without errors', () => {
    const wrapper = findByTestAttribute(component, 'client');
    expect(wrapper.length).toBe(1);
  });

})