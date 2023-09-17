import React, {useEffect, useState} from "react";
import girlData from '../mock/collects.json';
import CardList from "./components/CardList";


export default function App() {
    const [girlCards, setGirlCards] = useState(girlData);

    return (
        <div className="App">
            <CardList collections={girlCards} />
        </div>
    );
}
