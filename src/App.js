import React from 'react';
import IconDemos from './components/icons/IconDemos';
import ScrollbarDemos from './components/scrollbars/ScrollbarDemos';
import CardDemos from './components/cards/CardDemos';
import NavbarDemos from './components/navbars/NavbarDemos';

function App() {
    return (
        <div className="App">
            <NavbarDemos />
            <IconDemos />
            {/* <ScrollbarDemos /> */}
            <CardDemos />
        </div>
    );
}

export default App;
