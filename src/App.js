import React from 'react';
import './App.css';
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";


function App() {
    return (

        <div className="App">
            <HeaderComponent isAdmin={false} />
            <FooterComponent/>
        </div>
    );
}

export default App;
