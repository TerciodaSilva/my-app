import PlanCustomer from './components/PlanCustomer'
import Modulo from './components/Modulo'
import Payment from './components/Payment';
import Grid from '@mui/material/Grid';
import { Container, Box } from '@mui/material';
import DetailsPayment from './components/DetailsPayment';
import Invoices from './components/Invoices';

function App() {
  const dataList = [
    {
      name: "STARTER",
      description: "Todos os recursos exceto NFC-e, APP do garçom e autoatendimento",
      price: "R$ 239,00*/ mês",
      isCurrencyPlan: false,
      labelStatus: "Mudar Plano"
    },
    {
      name: "ADVANCED",
      description: "Todos os recursos exceto APP do garçom e autoatendimento",
      price: "R$ 329,00*/ mês",
      isCurrencyPlan: true,
      labelStatus: "Plano Atual"
    },
    {
      name: "PREMIUM",
      description: "Todos os recursos disponíveis",
      price: "R$ 419,00*/ mês",
      isCurrencyPlan: false,
      labelStatus: "Mudar Plano"
    }
  ]

  const invoiceList = [
    {date: "01/01/2024", price: "R$ 10,00"},
    {date: "01/01/2024", price: "R$ 10,00"},
    {date: "01/01/2024", price: "R$ 10,00"},
    {date: "01/01/2024", price: "R$ 10,00"},
  ]

  const invoices = {date: "01/01/2024", price: "R$ 10,00"}

  return (
    <div className="App">
        <Container style={{
          margin: 0,
          paddingLeft: 100,
          paddingBottom: 20,
          paddingTop: 20
        }}>
          <h1>Planos</h1>
        </Container>
        <Grid container spacing={4} justifyContent="space-around">
          {
            dataList.map(data => {
                return (
                  <Grid item xs={3} md={3}>
                    <PlanCustomer data={data} />
                  </Grid> 
                );
              })
          }
        </Grid>


        <Container style={{
          margin: 0,
          paddingLeft: 100,
          paddingBottom: 20,
          paddingTop: 20
        }}>
          <h1>Modulo</h1>
        </Container>
        
        <Box
          sx={{
            display: 'grid',
            gap: 1,
            gridTemplateColumns: 'repeat(3, 1fr)',
          }}
        >
          <Modulo/>
          <Modulo/>
          <Modulo/>
          <Modulo/>
          <Modulo/>
          <Modulo/>
          <Modulo/>
          <Modulo/>
          <Modulo/>
        </Box>



        <Container style={{
          margin: 0,
          paddingLeft: 100,
          paddingBottom: 20,
          paddingTop: 20
        }}>
          <h1>Pagamentos</h1>
        </Container>
        <DetailsPayment/>


        {/* Forma de Pagamentos */}

        <Container style={{
          margin: 0,
          paddingLeft: 100,
          paddingBottom: 20,
          paddingTop: 20
        }}>
          <h1>Formas de pagamentos</h1>
        </Container>
        <Container style={{
          width: "100%",
          margin: 60,
          padding: 0
        }}>
          <Payment/>
        </Container>

        <Container style={{
          margin: 0,
          paddingLeft: 100,
          paddingBottom: 20,
          paddingTop: 20
        }}>
          <h1>Faturas</h1>
        </Container>

        {
            invoiceList.map(data => {
                return (
                  <Container style={{
                    margin: 0,
                    marginBottom: 10
                  }}>
                    <Invoices data={data} />
                  </Container> 
                );
              })
          }
        
        {/* <h1>Modulos</h1> */}

        {/* <Grid container spacing={24} justifyContent="start">
          <Grid item xs={12} md={2}>
            <Modulo />
          </Grid> 
          <Grid item xs={12} md={2}>
            <Modulo />
          </Grid> 
        </Grid> */}
    </div>
  );
}

export default App;
