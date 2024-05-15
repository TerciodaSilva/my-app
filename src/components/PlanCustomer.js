
import { Component } from "react"
import * as React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { styled } from "@mui/material";

import Feature from "./Feature"


class PlanCustomer extends Component {
  render() {

    const { data } = this.props;

    return (
      <Container>
        <Container style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          backgroundColor: "#F6F6F6",
          height: 250,
          padding: 0 
        
        }}>

          <Container style={{
            marginTop: 38
          }}>

            <Container style={{
              fontSize: 24
            }}>
              {data.name}
            </Container>

            <Container style={{
              fontWeight: "bold"
            }}>
              {data.price}
            </Container>          

          </Container>
          
          <Container style={{
            display: "flex",
            justifyContent: "center",
            height: 40,
            position: "relative",
            top: 60,
            padding: 0 
          }}>

            {data.isCurrencyPlan ? 
            (

              <Container style={{
                padding: 0,
                backgroundColor: "#5f57f7",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#F6F6F6"
              }}>
                
                Plano Atual

              </Container>

            ) : (
              <Button 
                variant="outlined"
                style={{
                  color: "#5f57f7",
                  borderColor: "#5f57f7"
                }}
              >MUDAR PARA ESSE</Button>
            )}

          </Container>
        </Container>
        <Container style={{
          display: "flex",
          alignItems: "center",
          fontSize: 28,
          height: 60,
          backgroundColor: "white"
        }}>
          Recursos
        </Container>
        <Feature label="Robô de Atendimento"/>
        <Feature label="Robô de Atendimento"/>
        <Feature label="Robô de Atendimento"/>
        <Feature label="Robô de Atendimento"/>
        <Feature label="Robô de Atendimento"/>
        <Feature label="Robô de Atendimento"/>
        <Feature label="Robô de Atendimento"/>
        <Feature label="Robô de Atendimento"/>
        <Feature label="Robô de Atendimento"/>
      </Container>

    ) 
  }
}

export default PlanCustomer;