import React from "react";
import "./App.css";

import Tariff from "./components/Tariff";

const App: React.FC = () => {
        return (
                <div className="App">
                        <header className="App-header">
                                <Tariff />
                        </header>
                </div>
        );
};

export default App;
