import React from 'react';
import Enzyme from 'enzyme'
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import App from '../src/components/App';

Enzyme.configure({ adapter: new Adapter() })

describe ('App component', () => {

  const app = shallow(<App />);

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('contains a Wallet component', () => {
    console.log(app.debug());
    expect(app.find('Wallet').exists()).toBe(true);
  });
});
