import React from 'react';
import './App.css';
import HeaderComponent from "./Components/HeaderComponent";


function App() {
    return (

        <div className="App">
            <HeaderComponent isAdmin={false} />
        </div>
    );
}

export default App;