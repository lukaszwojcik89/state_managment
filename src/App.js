import './App.css';
import {useState} from "react";
import initialState from "./initialState";
import Grudges from "./components/Grudges";

function App() {
    const [grudges, setGrudges] = useState(initialState);
    return (
        <div className="App">
            <Grudges grudges={grudges} />
        </div>
    );
}

export default App;
