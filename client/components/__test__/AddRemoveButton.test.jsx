import React from 'react';
import { shallow } from 'enzyme';
import AddRemoveButton from '../AddRemoveButton';

describe('AddButton', () => {
  let wrapper = null;
  const props = {
    type: 'add',
    onClick: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<AddRemoveButton {...props} />);
  });

  it('it renders button', () => {
    expect(wrapper.exists('.overlay__close-button')).toEqual(true);
  });

  it('has correct aria-label', () => {
    expect(wrapper.find('button').props()).toHaveProperty('aria-label', 'Add to collection');
  });
});

describe('RemoveButton', () => {
  let wrapper = null;
  const props = {
    type: 'remove',
    onClick: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<AddRemoveButton {...props} />);
  });

  it('has correct aria-label', () => {
    expect(wrapper.find('button').props()).toHaveProperty('aria-label', 'Remove from collection');
  });
});
