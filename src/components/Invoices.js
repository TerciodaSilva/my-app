import { Component } from "react"
import * as React from 'react';
import Container from '@mui/material/Container';
import { MdDownloadForOffline } from "react-icons/md";

class Invoices extends Component {

  render() {

    const { data } = this.props;

    return (
      <Container style={{
        margin: 0,
        padding: 0
      }}>
        <Container style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#F6F6F6",
          height: 40,
          width: 800
        }}>
          <Container style={{
            display: "flex",
            alignItems: "center"
          }}>
            {data.date}
          </Container>
          <Container style={{
            display: "flex",
            alignItems: "center",
            width: 150
          }}>
            {data.price}
          </Container>
          <MdDownloadForOffline style={{
            fontSize: 40
          }}/>
        </Container>
      </Container>
    )
  }
}

export default Invoices;