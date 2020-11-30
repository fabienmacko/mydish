import React from 'react';
import {shallow} from 'enzyme';
import App from './index';
import {findByTestAttribute} from '../../utils';


const setUp = (props={}) => {
  const component = shallow(<App {...props} />);
  return component;
}



describe('App component', () => {

  let component;
  beforeEach(() => {
    component = setUp();
  })

  it('Should render without errors', () => {
    const wrapper = findByTestAttribute(component, 'app');
    expect(wrapper.length).toBe(1);
  });

})