import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import SnakeHead from './SnakeHead';

describe('Component: SnakeHead', () => {
  let props = {
    x: 10,
    y: 10,
    blockSize: 20,
    theme: { snakeColor: 'black', snakeColorInvert: 'white' },
    towards: 'left',
  };

  it('basic shape check', () => {
    const wrapper = shallow(<SnakeHead {...props} />);
    expect(wrapper.find('Shape').length).toEqual(1);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<SnakeHead {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
