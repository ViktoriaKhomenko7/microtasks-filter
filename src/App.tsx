import React, {useState} from 'react';
import './App.css';


type FilterType = "all" | "dollar" | "ruble"

function App() {
    const [money, setMoney] = useState([
        {banknote: "dollar", nominal: 100, number: "a123456789"},
        {banknote: "dollar", nominal: 50, number: "b123456789"},
        {banknote: "ruble", nominal: 100, number: "c123456789"},
        {banknote: "dollar", nominal: 100, number: "d123456789"},
        {banknote: "dollar", nominal: 50, number: "e123456789"},
        {banknote: "ruble", nominal: 100, number: "f123456789"},
        {banknote: "dollar", nominal: 50, number: "j123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"}
    ])

    const[filter, setFilter] = useState<FilterType>("all")

    let currentMoney = money;
// если nameButton = "dollar"
    if(filter==="dollar"){
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "dollar");
    }
// если nameButton = "ruble"
    if(filter==="ruble"){
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "ruble");
    }

    const onclickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }


    return (
        <>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: "45px"}}>
                <button onClick={()=>onclickFilterHandler("all")}>all</button>
                <button onClick={()=>onclickFilterHandler("ruble")}>ruble</button>
                <button onClick={()=>onclickFilterHandler("dollar")}>dollar</button>
            </div>
        </>
    );
}

export default App;
