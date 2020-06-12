
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { NavComponent } from './../Nav';

describe('Nav', () => {
  let wrapper = null;
  let instance = null;
  const props = {
    newProject: jest.fn(),
    saveProject: jest.fn(),
    autosaveProject: jest.fn(),
    exportProjectAsZip: jest.fn(),
    cloneProject: jest.fn(),
    user: {
      authenticated: true,
      username: 'new-user',
      id: 'new-user'
    },
    project: {
      id: 'new-project',
      owner: {
        id: 'new-user'
      }
    },
    logoutUser: jest.fn(),
    newFile: jest.fn(),
    newFolder: jest.fn(),
    showShareModal: jest.fn(),
    showErrorModal: jest.fn(),
    unsavedChanges: false,
    warnIfUnsavedChanges: jest.fn(),
    showKeyboardShortcutModal: jest.fn(),
    cmController: {
      tidyCode: jest.fn(),
      showFind: jest.fn(),
      findNext: jest.fn(),
      findPrev: jest.fn()
    },
    startSketch: jest.fn(),
    stopSketch: jest.fn(),
    setAllAccessibleOutput: jest.fn(),
    showToast: jest.fn(),
    setToastText: jest.fn(),
    rootFile: {
      id: 'root-file'
    }
  };

  beforeEach(() => {
    wrapper = shallow(<NavComponent {...props} />);
    instance = wrapper.instance();
  });

  it('it renders main navigation', () => {
    expect(wrapper.exists('.nav')).toEqual(true);
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<NavComponent {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('set dropdown to file', () => {
    instance.setDropdown('file');
    expect(wrapper.state('dropdownOpen')).toBe('file');
  });

  it('set dropdown to none', () => {
    instance.setDropdown('file');
    expect(wrapper.state('dropdownOpen')).toBe('file');
    instance.setDropdown('none');
    expect(wrapper.state('dropdownOpen')).toBe('none');
  });

  it('closes dropdown', () => {
    instance.setDropdown('file');
    expect(wrapper.state('dropdownOpen')).toBe('file');
    instance.closeDropDown({ keyCode: 27 });
    expect(wrapper.state('dropdownOpen')).toBe('none');
  });
});
