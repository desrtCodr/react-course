import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import Popular from './components/Popular';
import './index.css';
import Battle from './components/Battle';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Nav from './components/Nav';
import Results from './components/Results';
/*
 Component needs to: 
 1. maintain its own state
 2. dictate lifecycle
 3. render to the ui
*/

class App extends React.Component {
  state = {
    theme: 'light',
  };
  toggleTheme = () => {
    this.setState(({ theme }) => ({
      theme: theme === 'light' ? 'dark' : 'light',
    }));
  };

  render() {
    return (
      <Router>
        <div className={this.state.theme}>
          <div className='container'>
            <Nav
              theme={this.state.theme}
              toggleTheme={this.toggleTheme}
            />
            <Routes>
              <Route path='/' element={<Popular />} />
              <Route path='/battle' element={<Battle />} />
              <Route path='/results' element={<Results />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

const rootElement = document.getElementById('app');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
