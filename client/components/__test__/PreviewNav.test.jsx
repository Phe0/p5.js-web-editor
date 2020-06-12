import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import PreviewNav from '../PreviewNav';

describe('PreviewNav', () => {
  let wrapper = null;
  const props = {
    owner: {
      username: 'testing-owner'
    },
    project: {
      id: '1',
      name: 'testing-project',
    }
  };

  beforeEach(() => {
    wrapper = shallow(<PreviewNav {...props} />);
  });

  it('it renders preview-nav', () => {
    expect(wrapper.exists('.preview-nav')).toEqual(true);
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<PreviewNav {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
