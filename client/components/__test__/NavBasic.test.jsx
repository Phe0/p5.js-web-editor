import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import NavBasic from '../NavBasic';

describe('NavBasic', () => {
  let wrapper = null;
  const props = {
    onBack: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<NavBasic {...props} />);
  });

  it('it renders nav', () => {
    expect(wrapper.exists('.nav')).toEqual(true);
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<NavBasic {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
