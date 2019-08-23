import React from 'react';
import HeaderComponent from "./Components/HeaderComponent";
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