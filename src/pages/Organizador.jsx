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

function listOrganizador() {
  const [organizador, setOrganizador] = useState([]);

  async function getOrganizador(){
    //chamada da API
    await api.getOrganizador().then(
      (response)=>{
        console.log(response.data.organizadores)
        setOrganizador(response.data.organizadores)
      },(error)=> {
        console.log("Erro: ",error)
      }
    )

    

  }

  const listOrganizador = organizador.map((organizador)=>{
    return(
      <TableRow key={organizador.id_organizador}>
        <TableCell align='center'>{organizador.nome}</TableCell>
        <TableCell align='center'>{organizador.email}</TableCell>
        <TableCell align='center'>{organizador.senha}</TableCell>
        <TableCell align='center'>{organizador.telefone}</TableCell>
      </TableRow>
    )
  })


  useEffect(() => {
    getOrganizador();
  }, []);

  return (
    <div>
      <h4 align='center'>Lista de Organizadores</h4>
      <TableContainer component={Paper} style={{margin:"2px"}}>
        <Table size='small'>
          <TableHead style={{backgroundColor:"#AD4596"}}>
            <TableRow>
              <TableCell align='center'>
                Nome
              </TableCell>
              <TableCell align='center'>
                Email
              </TableCell>
              <TableCell align='center'>
                Senha 
              </TableCell>
              <TableCell align='center'>
                Telefone
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{listOrganizador}</TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default listOrganizador