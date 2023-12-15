import sandwitchSVG from "./assets/sandwitch.svg"
import placeholderSVG from "./assets/placeholder.svg"
const RightMenu = () => {
    return (
        <div className="right_menu">
            <a href="#"><img src={sandwitchSVG} alt="sandwitch" className="sandwitch_img" /></a>
            <a href="#"><img src={placeholderSVG} alt="sandwitch" className="placeholder_img" /></a>
        </div>
    );
};

export default RightMenu;