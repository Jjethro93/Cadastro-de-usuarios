
import api from '../../Services/api'
import { useEffect } from 'react';
import Button from "../../Components/Button";
import TopBackGround from "../../Components/TopBackground";

function ListUsers() {

    useEffect(() => {
        async function getUsers (){
     const usersFromApi= await api.get('/usuarios')
     console.log (usersFromApi)
    }

    getUsers
    }, [])
    

    return (

        <div>
            <TopBackGround/>
            <h1>Listagem de Usuários</h1>
            <Button>Voltar</Button>
        </div>

    )
}


export default ListUsers 