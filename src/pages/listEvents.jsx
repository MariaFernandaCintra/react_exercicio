import { useState, useEffect } from 'react'
// Imports para criação de tabela
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
// TableHead é onde colocamos os titulos
import TableHead from '@mui/material/TableHead';
// TableBody é onde colocamos o conteúdo
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import api from "../axios/axios"
import {Button} from '@mui/material';
import {Link} from 'react-router-dom';

function listEvents() {
  const [eventos, setEventos] = useState([]);

  async function getEventos(){
    //chamada da API
    await api.getEventos().then(
      (response)=>{
        console.log(response.data.events)
        setEventos(response.data.events)
      },(error)=> {
        console.log("Erro: ",error)
      }
    )

    

  }

  const listEventos = eventos.map((evento)=>{
    return(
      <TableRow key={evento.id_evento}>
        <TableCell align='center'>{evento.nome}</TableCell>
        <TableCell align='center'>{evento.descricao}</TableCell>
        <TableCell align='center'>{evento.data_hora}</TableCell>
        <TableCell align='center'>{evento.local}</TableCell>
      </TableRow>
    )
  })


  useEffect(() => {
    getEventos();
  }, []);

  return (
    <div>
      <h4 align='center'>Lista de Eventos</h4>
      <TableContainer component={Paper} style={{margin:"2px"}}>
        <Table size='small'>
          <TableHead style={{backgroundColor:"#AD4596"}}>
            <TableRow>
              <TableCell align='center'>
                Nome
              </TableCell>
              <TableCell align='center'>
                Descrição
              </TableCell>
              <TableCell align='center'>
                Data e hora
              </TableCell>
              <TableCell align='center'>
                Local
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{listEventos}</TableBody>
        </Table>
      </TableContainer>
      <Button
      sx={{ mt: 3, mb: 2, backgroundColor: "#AD4596" }}
      fullWidth
      variant='contained'
      component={Link}
      to="/criarEvento">   
        Criar um novo evento
      </Button>
      <Button
      sx={{ mt: 3, mb: 2, backgroundColor: "#AD4596" }}
      fullWidth
      variant='contained'
      component={Link}
      to="/">   
        Voltar para home
      </Button>
    </div>
  )
}

export default listEvents