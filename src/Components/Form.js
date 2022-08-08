import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import '../Style/form.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";


const Form = (props) => {
    const { register, formState: { errors }, watch ,handleSubmit,  } = useForm();
    const onSubmit = (data, e) => {
        console.log(data)
        props.addAdventure(data)
        e.target.reset();
        
    };
    const checkForm = watch('checkForm');
    const [character, setCharacter] = useState();
    
    const [data, setData] = useState({
        adventure: '',
        origin: '',
        destination: '',
        characters: 'Frodo'
    });
    
    
    
    const handleInputChange = (e) => {
        console.log(e.target.value)
         setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }
  

    useEffect(() => {
    const headers = {
      'Accept': 'application/json',
      'Authorization': 'Bearer WV8va0wFTm8n8AjsxxEz'
    }
    const fetchData = async () => {
      const rawCharacters = await fetch('https://the-one-api.dev/v2/character/' , { headers: headers })
      const characters = await rawCharacters.json();
      const character = characters?.docs.map(character => <option character={character.name} key={character._id} value={character.name}>{character.name}</option>);
      setCharacter(character)

    };
    fetchData();
  }, [])

    return (
        <div>
            <div className="item">
                <label className="label" htmlFor="check">New adventure</label>
                <input className="nav_input" type="checkbox" id="check"{...register('checkForm')} />
            </div>
            {checkForm && (
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="form">
                        <label className="form_title" htmlFor="check">
                            <h3> New Adventure </h3>
                            <FontAwesomeIcon icon={faXmark} htmlFor="check"/>
                        </label>
                        

                        <h3>About Adventure</h3>
                        <div className="info">
                            <div className="adventure">
                                <label>Adventure Name</label>
                                <input type="text" name="adventure"  {...register('adventure', {
                                    required: true,
                                    maxLength:100,
                                    onChange: handleInputChange
                                    
                                })}/>
                                {errors.adventure?.type === 'required' && <p>Adventure name is required</p>}
                                {errors.adventure?.type === 'maxLength' && <p>max 100 characters </p>}

                            </div>
                            <div className="origen">
                                <label>Origin</label>
                                <input type="text" name="origin"  {...register('origin', {
                                    required: true,
                                    onChange: handleInputChange
                                })}/>
                                {errors.origen?.type === 'required' && <p>Origin is required</p>}
                                
                            </div>
                            <div className="destination">
                            
                                <label>Destination</label>
                                <input type="text" name="destination"  {...register('destination', {
                                    required: true,
                                    onChange: handleInputChange
                                    
                                })}/>
                                {errors.destination?.type === 'required' && <p>Destination name is required</p>}
                            </div>
                        </div>
                        <div className="character">
                            <h3>What is the Character?</h3>
                            <label>Character</label>
                            <select name="characters"  {...register('character', {
                                required: true,
                                onChange: handleInputChange
                            })} >
                                {character}
                            </select>
                        </div>
                        <input className="button" type="submit"  value="Create"/> 
                        <p>{data.adventure} </p>
                        <p>{data.origin}</p>
                        <p>{data.destination}</p>

                    </form>
                    
                   
                        
                </div>
            )}
              
               
        </div>
    )
}

export default Form;