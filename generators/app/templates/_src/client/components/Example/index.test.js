import React from 'react';
import { shallow } from 'enzyme';
import { Example } from './';

describe('Example', () => {
  const component = shallow(< Example />);
  it('should render the component without crashing', () => {
    expect(component.find('h3').text()).toEqual('Example Component');
  });
});
