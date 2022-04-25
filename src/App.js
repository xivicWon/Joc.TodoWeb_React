import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';

// jsx => JavaScript eXtention ES6+ (ECMAScript 2015+)
class App extends React.Component {
    getButtonTitle = () => {
        return "Hello World";
    }
    render() {
        const buttonTitle = this.getButtonTitle();
        return (
            <div className="App">
                <p>{buttonTitle}</p>
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </div>
        )
    }
}

export default App;
