import { useEffect, useState } from "react"
import { usersService } from "../../services/users"
import { Link } from "react-router-dom"

const Gryffindor = () => {

    const [characters, setUsers] = useState([])

    useEffect(() => {
        usersService.getAll()
        .then(response => setUsers(response))

        }
    , [characters])
    
    const filterG = characters.filter((character) => character.house.includes("Gryffindor") )

    return (
        <>
            <h1>Personajes</h1>
            <table border={3}>
                <thead>
                    <th>image</th>
                    <th>name</th>
                    <th>species</th>
                    <th>house</th>
                    <th>patronus</th>
                </thead>
                
                <tbody>
                    {
                        filterG.map(user=>{
                            return(
                                <tr key={user.id}>
                                    <td>
                                       <img height={150} width={100} src={`${user.image}`} alt=""/>
                                    </td>
                                    <td>
                                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                                    </td>
                                    <td>{user.species}</td>
                                    <td>
                                        {user.house}
                                    </td>
                                    <td>{user.patronus}</td>
                                </tr>
                            )
                        }
                            )
                    }
                </tbody>
            </table>
        </>
    )
}
    


  
  
  export {Gryffindor}