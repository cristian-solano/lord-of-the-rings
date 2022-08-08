import Hat from "../Images/Iconos/Hat.svg";
import Dashboard from "../Images/Iconos/Dashboard.svg";
import Calendar from "../Images/Iconos/Calendar.svg";
import Characters from "../Images/Iconos/Characters.svg";
import Chat from "../Images/Iconos/Chat.svg";
import Loguot from "../Images/Iconos/Loguot.svg";
import '../Style/aside.css'

//menu principal de la api
const Aside = () => {
    return (
        <div className="aside">
            <div className="title">
                
                <img src={Hat} alt={'gandalf-hat'}/>
                <p>Gandalf's Book</p>
                
            </div>
            <div className="menu">
                <a href="#Dashboard">
                    
                    <img src={Dashboard} alt={"dashboard"}/>
                    <p>Dashboard</p>
                </a>
                <a href="#calendar">
                    <img src={Calendar} alt={'calendar'}/>
                    <p>Calendar</p>
                </a>
                <a href="#characters">
                    <img src={Characters} alt={'characters'}/>
                    <p>Characters</p>
                </a>
                <a href="#chat">
                    <img src={Chat} alt={'chat'} />
                    <p>Chat</p>
                </a>
               
            </div>
            <div className="logout">
                <a href="#end"><img src={Loguot} alt={'logout'} /></a>
            </div>
            
        </div>
    )
}

export default Aside