import React from 'react';
import { render } from 'enzyme';
import User from './User';
import '../setupTests';

test('component renders', () => {
    const wrapper = render(<User />);
  });

test('component renders', () => {
    const wrapper = render(<User />);
    console.log(wrapper);
  });