import { Component } from "react"
import * as React from 'react';
import {Container, Divider, Box} from '@mui/material';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import { FaTrash } from "react-icons/fa";

class DetailsPayment extends Component {

  render() {
    return (
      <Container>

        <Container style={{
            display: "flex"
          }}>
            <Container>
              <Container>
                Plano
              </Container>
              <Container>
                <h1>Básico</h1>
              </Container>
            </Container>
            <Container>
              <Container>
                Ciclo
              </Container>
              <Container>
                <h1>Anual</h1>
              </Container>
            </Container>
            <Container>
              <Container>
                Próximo pagamento
              </Container>
              <Container>
                <h1>01/01/2025</h1>
              </Container>
            </Container>
            <Container>
              <Container>
                Valor
              </Container>
              <Container>
                <h1>R$ 499,00</h1>
              </Container>
          </Container>
        </Container>

        <Divider/>

        <Box
          sx={{
            display: 'grid',
            gap: 1,
            gridTemplateColumns: 'repeat(3, 1fr)',
          }}
        >
          <Container style={{
            display: "flex",
            justifyContent: "center"
          }}>
            <p>Módulo de tablets</p>
          </Container>
          <Container style={{
            display: "flex",
            justifyContent: "center"
          }}>
            <p>Ativado em: 01/02/24</p>
          </Container>
          <Container style={{
            display: "flex",
            justifyContent: "center"
          }}>
            <p>R$ 79,90</p>
          </Container>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gap: 1,
            gridTemplateColumns: 'repeat(3, 1fr)',
          }}
        >
          <Container style={{
            display: "flex",
            justifyContent: "center"
          }}>
            <p>Módulo de tablets</p>
          </Container>
          <Container style={{
            display: "flex",
            justifyContent: "center"
          }}>
            <p>Ativado em: 01/02/24</p>
          </Container>
          <Container style={{
            display: "flex",
            justifyContent: "center"
          }}>
            <p>R$ 79,90</p>
          </Container>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gap: 1,
            gridTemplateColumns: 'repeat(3, 1fr)',
          }}
        >
          <Container style={{
            display: "flex",
            justifyContent: "center"
          }}>
            <p>Módulo de tablets</p>
          </Container>
          <Container style={{
            display: "flex",
            justifyContent: "center"
          }}>
            <p>Ativado em: 01/02/24</p>
          </Container>
          <Container style={{
            display: "flex",
            justifyContent: "center"
          }}>
            <p>R$ 79,90</p>
          </Container>
        </Box>

      </Container>
    )
  }
}

export default DetailsPayment;