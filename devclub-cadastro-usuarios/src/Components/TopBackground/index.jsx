import { Background } from './styles'
import UsersImage from '../../assets/users.png'

function TopBackGround() {

    return (
        <Background>
            <img src={UsersImage} alt='users-image'/>
        </Background>

    )
}


export default TopBackGround