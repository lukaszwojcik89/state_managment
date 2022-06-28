import "./App.css";
import { useState } from "react";
import initialState from "./initialState";
import { v4 as id } from 'uuid'
import Grudges from "./components/Grudges";
import NewGrudge from "./components/NewGrudge";

function App() {
    const [grudges, setGrudges] = useState(initialState);

    const addGrudge = (grudge) => {
        grudge.id = id()
        grudge.forgiven = false
        setGrudges([grudge, ...grudges])
    }


    const toggleForgiveness = (id) => {
        setGrudges(
            grudges.map((grudge) => {
                if (grudge.id !== id) return grudge;
                return { ...grudge, forgiven: !grudge.forgiven };
            })
        );
    };

    return (
        <div className="App">
            <NewGrudge onSubmit={addGrudge} />
            <Grudges grudges={grudges} onForgive={toggleForgiveness} />
        </div>
    );
}

export default App;
