import { Component } from "react"
import * as React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { styled } from "@mui/material";
import { IoCheckbox } from "react-icons/io5";

class Feature extends Component {

  render() {
    const { label } = this.props;
    
    return (
      <Container style={{
        display: "flex",
        alignItems: "center",
      }}>
        <IoCheckbox style={{
          fontSize: 30,
          color: "green",
          marginRight: 10
        }}/>
        <p> {label} </p>
      </Container>
    )
  }
}

export default Feature;