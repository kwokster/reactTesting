import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//Anytime Jest starts, it will look for a file with the name of setupTests.js. It will run this before any other code.
configure({ adapter: new Adapter() });