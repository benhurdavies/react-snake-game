import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import SnakeCorner from './SnakeCorner';

describe('Component: SnakeCorner', () => {
  let props = {
    x: 10,
    y: 10,
    blockSize: 20,
    theme: { snakeColor: 'black' },
    corner: 'left-down',
  };

  it('basic shape check', () => {
    const wrapper = shallow(<SnakeCorner {...props} />);
    expect(wrapper.find('Shape').length).toEqual(1);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<SnakeCorner {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
