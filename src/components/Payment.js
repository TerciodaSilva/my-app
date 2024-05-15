import { Component } from "react"
import * as React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import { FaTrash } from "react-icons/fa";

class Payment extends Component {

  render() {

    return (
      <Container style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        width: 450,
        margin: 0
      }}>
        <Container style={{
          backgroundColor: "#F6F6F6", 
          height: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Container>
            Cartão **** **** **** 1111
          </Container>
          <FaTrash style={{
            fontSize: 22,
            marginRight: 12,
            color: "gray"
          }}/>
          <Radio />
        </Container>

        <Container style={{
          backgroundColor: "#F6F6F6", 
          height: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Container>
            Pix
          </Container>
          <Radio />
        </Container>

        {/* <Radio
          checked={selectedValue === 'b'}
          onChange={handleChange}
          value="b"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'B' }}
        /> */}
        <br/>
        <Button variant="contained" style={{
          width: 140
        }}>ADICIONAR</Button>
      </Container>
    )
  }
}

export default Payment;