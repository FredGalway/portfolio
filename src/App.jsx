import './App.css';
import ReactDOM from 'react-dom';

import LogRocket from 'logrocket';
LogRocket.init('0hqovk/portfolio-react-pro');

import PortfolioContainer from './PortfolioContainer/PortfolioContainer';

function App() {
    return (
      <div className="App">
        <PortfolioContainer/>
      </div>
    );
}

export default App;