import React from 'react';
import './App.css';
import HeaderComponent from "./Components/HeaderComponent";

import React from 'react';
import './App.css';
import GridComponent from "./GridLayout/GridComponent";




function App() {
    return (

        <div className="App">
            <GridComponent/>

            <HeaderComponent isAdmin={false} />
        </div>
    );
}

export default App;