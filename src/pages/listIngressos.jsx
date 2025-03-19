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

function listIngressos() {
  const [ingressos, setIngressos] = useState([]);

  async function getIngressos(){
    //chamada da API
    await api.getIngressos().then(
      (response)=>{
        console.log(response.data.events)
        setIngressos(response.data.events)
      },(error)=> {
        console.log("Erro: ",error)
      }
    )

    

  }

  const listIngressos = ingressos.map((ingressos)=>{
    return(
      <TableRow key={ingressos.id_ingresso}>
        <TableCell align='center'>{ingressos.preco}</TableCell>
        <TableCell align='center'>{ingressos.tipo}</TableCell>
      </TableRow>
    )
  })


  useEffect(() => {
    getIngressos();
  }, []);

  return (
    <div>
      <h4 align='center'>Lista de Ingressos</h4>
      <TableContainer component={Paper} style={{margin:"2px"}}>
        <Table size='small'>
          <TableHead style={{backgroundColor:"#AD4596"}}>
            <TableRow>
              <TableCell align='center'>
                Preço
              </TableCell>
              <TableCell align='center'>
                Tipo
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{listIngressos}</TableBody>
        </Table>
      </TableContainer>
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

export default listIngressos