import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import Popular from './components/Popular'
import "./index.css"
import Battle from "./components/Battle"

/*
 Component needs to: 
 1. maintain its own state
 2. dictate lifecycle
 3. render to the ui
*/

class App extends React.Component {
    render () {
        return (
        <div className='light'>
            <div className='container'>
                <Battle />
            </div>
        </div>
    )}
}

const rootElement = document.getElementById('app')
const root = ReactDOM.createRoot(rootElement)
root.render(<App />)