import '../Style/create.css';
import Placeholder from "../Images/Iconos/Placeholder.png";

const Create = (props) => {

    
    

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            { props.adventure.length > 0 ?
                props.adventure.map(adventure => (
                <div className="create-info" key={adventure.adventure}>
                    <img src={Placeholder} alt={'placeholder'} />
                    <div className="create-title">
                        <h1 className="create-adv">{adventure.adventure}</h1>
                        <p>{adventure.character}</p>
                    </div>
                    <div className="create-destiny">
                        <p>Origin: {adventure.origin}</p>
                        <p>Destination: {adventure.destination}</p>
                    </div> 
                </div>
                )) : (
                    <tr>
                      <td colSpan={3}>Not Adventures</td>
                    </tr> ) 
            }
        </div>
        
    )


}

export default Create;