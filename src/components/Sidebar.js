import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

const SideBar = ()=>{
    const isMenuOpen = useSelector(store=> store.app.isMenuOpen);

    if(!isMenuOpen) return null;

    return <div className="w-48">
       {isMenuOpen && <ul className="ml-6 border-b-2">
        <Link to="/"><li className="mx-auto flex items-center my-2">
        <img className="w-9 h-9" src="https://static.vecteezy.com/system/resources/previews/000/366/438/original/home-vector-icon.jpg" alt="Home" />
            <span className="pl-4">Home</span>
        </li></Link>
        <li className="mx-auto flex items-center my-2">
            <img className="w-9 h-9" src="https://i.pinimg.com/originals/17/d2/18/17d21878c22fe49e7e4752eecaa36541.png" alt="shorts" />
            <span className="pl-4">Shorts</span>
        </li>
        <li className="mx-auto flex items-center my-2">
            <img className="w-9 h-9" src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3211778/youtube-subscription-icon-md.png" alt="subscription" />
            <span className="pl-4">Subscriptions</span>
        </li>
        </ul>
       }
        </div>
    }
    export default SideBar;