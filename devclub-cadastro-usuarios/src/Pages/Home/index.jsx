import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import api from "../../Services/api"

import { 
  Title, 
  Container, 
  Form, 
  Input,
  InputLabel,
  ContainerInputs, 
} from "./styles"

import Button from "../../Components/Button"

import TopBackGround from "../../Components/TopBackground"
 


function Home(){
const inputName = useRef()
const inputAge = useRef()
const inputEmail = useRef()

const navigate = useNavigate()

async function registerNewUser(){
  const data = await api.post('/usuarios', {
    email: inputEmail.current.value,
    age: parseInt(inputAge.current.value),
    name: inputName.current.value
  })

  navigate('/lista-de-usuarios')
  console.log(data)
}

  return (

    <Container>

      <TopBackGround/>

      <Form>
        <Title> Cadastro de Usuarios </Title>
        <ContainerInputs>
          <div>
            <InputLabel>
              Nome <span> *</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do usuario" ref={inputName} />
          </div>

          <div>
            <InputLabel>
              Idade <span> *</span>
            </InputLabel>
            <Input type="number" placeholder="Idade do ususario" ref={inputAge}/>
          </div>
        </ContainerInputs>

        <div style = {{width:'100%'}} >
          <InputLabel>
            Idade <span> *</span>
          </InputLabel>
          <Input type="email" placeholder="E-mail do usuario" ref={inputEmail} />
        </div>

        <Button type="button" onClick={registerNewUser} theme ="primary"> Cadastrar ususario </Button>

      </Form>


      <Button type="button" onClick={()=>navigate('/lista-de-usuarios')}> Lista de ususario </Button>

    </Container>

  )
}

export default Home



/*
Exportar "padrao"-> export default -> uma coisa só por pagina
Export---> varias coisas por pagina

import default -> uma coisa só
import {I1,I2}-> varias coisas

*/
