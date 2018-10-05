import { shallow } from 'enzyme';
import React from 'react';

import SnakeHead from './SnakeHead';

describe('Component: SnakeHead', () => {
  it('basic shape', () => {
    let props = {
      x: 10,
      y: 10,
      blockSize: 20,
      theme: { snakeColor: 'black', snakeColorInvert: 'white' },
      towards: 'left',
    };
    const wrapper = shallow(<SnakeHead {...props} />);
    expect(wrapper.find('Shape').length).toEqual(1);
  });
});
