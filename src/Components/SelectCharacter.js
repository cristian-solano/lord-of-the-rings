
const SelectCharacter = ({character}) => {

    return (
        <div>
        {character ? (
            <div>
            <p>Name:</p>
            {character.name || "unknown"} 
            </div>
        ) : (
            <span>No hay nada</span>
        )}    
            
       </div>
    )
}

export default SelectCharacter;