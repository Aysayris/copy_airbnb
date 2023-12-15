import searchSVG from "./assets/search.svg"
import { useState } from "react";

const Search = () => {
    const [isInputVisible, setIsInputVisible] = useState([false, false, false, false])

    return (
        <div className="search">
            <div className="search_inputs">
                <b>Где</b>
                    <input type="text" placeholder="Поиск направлений" />
                  
            </div>
            <div className="search_inputs">
                <b>Прибытие</b>
  
                    <input type="text" placeholder="Когда?" />
              
            </div>
            <div className="search_inputs">
            <b>Выезд</b>
                    <input type="text" placeholder="Когда?" />
               
            </div>
            <div className="search_inputs">
                <b>Кто</b>
     
                    <input type="text" placeholder="Кто едет?" />
                
            </div>
            <a href="#"><img src={searchSVG} alt="search" /></a>
        </div>
    );
};

export default Search;