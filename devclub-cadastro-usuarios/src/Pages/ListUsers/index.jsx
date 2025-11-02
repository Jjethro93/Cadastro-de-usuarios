
import api from '../../Services/api'
import { useEffect, useState } from 'react';
import Button from "../../Components/Button";
import TopBackGround from "../../Components/TopBackground";
import { useNavigate } from 'react-router-dom';
import Trash from "../../assets/trash.svg"

import { ContainerUser, Container, CardUser, AvatarUser, TrashIcon, Title } from './styles';



function ListUsers(){
    
    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    useEffect(() => {

        async function getUsers() {
            const { data } = await api.get('/usuarios')
            setUsers(data)
        }

        getUsers()

    }, [])

    async function deleteUsers(id){
        await api.delete(`/usuarios/${id}`)
    const updatedUsers = users.filter( user => user.id !== id)
    
    setUsers(updatedUsers)

}


    return (

        <Container>
            <TopBackGround />
            <Title>Lista de ususarios </Title>

            <ContainerUser>
                {users.map(user => (
                    <CardUser key={user.id}>
                        <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
                        <div >
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                            
                        </div>

                        <TrashIcon src={Trash} onClick= {()=>deleteUsers(user.id)}/>

                    </CardUser>


                ))}

            </ContainerUser>

            <Button type="button" onClick={()=>navigate('/')}>Voltar</Button>
        </Container>

    )
}


export default ListUsers 