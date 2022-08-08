

const Create = (props) => {

    
    

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            { props.adventure.length > 0 ?
                props.adventure.map(adventure => (
                <div key={adventure.adventure}>
                    <div>
                        <h1>{adventure.adventure}</h1>
                        <p>{adventure.character}</p>
                        
                    </div>
                    <div>
                        <p>{adventure.origin}</p>
                        <p>{adventure.destination}</p>
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