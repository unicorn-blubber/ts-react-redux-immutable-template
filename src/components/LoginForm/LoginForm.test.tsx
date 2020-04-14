/* global describe it expect */

import React from 'react';
import renderer from 'react-test-renderer';

import LoginForm from './LoginForm';

describe('<Dashboard />', () => {
  it('should match snapshot', () => {
    const component = renderer.create(<LoginForm />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
