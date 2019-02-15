import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
configure({ adapter: new Adapter() });

describe('App', () => {
  let component = null;

  it('renders correctly', () => {
    component = shallow(<App />);
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});