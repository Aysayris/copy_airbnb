import beachHome from "./assets/appartment_types/beachHome.svg"
import castleHome from "./assets/appartment_types/castleHome.svg"
import caveHome from "./assets/appartment_types/caveHome.svg"
import NPO from "./assets/appartment_types/NPO.svg"
import seaHome from "./assets/appartment_types/seaHome.svg"
import smallHome from "./assets/appartment_types/smallHome.svg"
import studioHome from "./assets/appartment_types/studioHome.svg"
import villageHome from "./assets/appartment_types/villageHome.svg"
import woodHome from "./assets/appartment_types/woodHome.svg"
// import woodSeaHome from "./assets/appartment_types/woodSeaHome.svg"
const AppartmentTypeBar = () => {
    return (
        <div className="filter">
            <nav>
            <a href="#"><img src={beachHome} alt=""/></a>
            <a href="#"><img src={castleHome} alt=""/></a>
            <a href="#"><img src={caveHome} alt=""/></a>
            <a href="#"><img src={NPO} alt=""/></a>
            <a href="#"><img src={seaHome} alt=""/></a>
            <a href="#"><img src={smallHome} alt=""/></a>
            <a href="#"><img src={studioHome} alt=""/></a>
            <a href="#"><img src={villageHome} alt=""/></a>
            <a href="#"><img src={woodHome} alt=""/></a>
            </nav>
            <button className="roll-button"><svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.25 15.25L8 8.5L1.25 1.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
            <button className="filters-btn"> 
            <svg width="19" height="28" viewBox="0 0 19 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_5_28)">
<path d="M14.875 12.6667C16.5319 12.6667 17.875 11.2489 17.875 9.49999C17.875 7.75109 16.5319 6.33333 14.875 6.33333C13.2181 6.33333 11.875 7.75109 11.875 9.49999C11.875 11.2489 13.2181 12.6667 14.875 12.6667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M0.791687 9.5H11.875" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g clip-path="url(#clip1_5_28)">
<path d="M3.79169 21.6667C5.44854 21.6667 6.79169 20.2489 6.79169 18.5C6.79169 16.7511 5.44854 15.3333 3.79169 15.3333C2.13483 15.3333 0.791687 16.7511 0.791687 18.5C0.791687 20.2489 2.13483 21.6667 3.79169 21.6667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.91669 18.5H18.2084" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_5_28">
<rect width="19" height="19" fill="white"/>
</clipPath>
<clipPath id="clip1_5_28">
<rect width="19" height="19" fill="white" transform="translate(0 9)"/>
</clipPath>
</defs>
</svg>

            Фильтры</button>
            <button className="show_result_toggle">Показывать итог (до налогов)
            <div className = 'toggle-switch'>
            <label>
                <input type='checkbox'/>
                <span className = 'slider'></span>
            </label>
        
        </div>
            </button>
           
        </div>
    );
};

export default AppartmentTypeBar;