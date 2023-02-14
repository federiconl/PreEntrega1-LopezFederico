import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { usersService } from "../../services/users"

const UserComplete = () => {
    const [user, setUser] = useState();

    const {userId} = useParams();

    useEffect(()=>{
        usersService.get(userId).then((data)=>setUser(data))
    },[userId])
    return(
        <ul >
            <img src="{`${user && user.image}`}" alt="" />
            <h1> {user && user.name} </h1>
            <li>Especie: {user && user.species}</li>
            <li>Genero: {user && user.gender}</li>
            <li>Casa: {user && user.house}</li>
            <li>Fecha de nacimiento: {user && user.dateOfBirth}</li>
            <li>Ancestros: {user && user.ancestry}</li>
            <li>Color de ojos: {user && user.eyeColour}</li>
            <li>color de pelo: {user && user.hairColour}</li>
            <li>Patronus: {user && user.patronus}</li>
            <li>Actor que lo interpreta: {user && user.actor}</li>
 
            
        </ul>
    )
}

export {UserComplete} ;