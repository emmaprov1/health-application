import { Wrapper } from '../Pages';
import ReactDOM from 'react-dom';
test('renders without crash', () => {
  const element = document.createElement('div')
  ReactDOM.render(<Wrapper />, element)
});
