import React from "react";
import Cards from './components/Cards';
import './App.css';
import { useGetUsers } from "./hooks/useGetUsers";

function App() {
    const { men ,women} = useGetUsers();

    return (
        <div className="App">
            <Cards data={women} title={'Women'} />
            <Cards data={men} title={'Men'} />

        </div>
    );
}

export default App;
