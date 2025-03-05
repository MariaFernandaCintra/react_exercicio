import {Link} from 'react-router-dom';

function Home(){
    return(
        <div align='center'>
            <h1>Seja bem vindo ao sitemas de eventos</h1>
            <Link to="/Evento">Ir para eventos</Link>
            <h1></h1>
            <Link to="/Ingressos">Ir para ingressos</Link>
            <h1></h1>
            <Link to="/Organizador">Ir para organizador</Link>
        </div>
    )
}

export default Home
