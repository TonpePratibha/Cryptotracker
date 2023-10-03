import React, { useEffect, useState } from 'react'
import { CoinList } from '../Config/api'
import axios from 'axios'
import { Cryptostate } from '../Cryptocontext'
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, LinearProgress, Table, TableContainer, TableHead, TextField, Typography,TableRow,TableCell, TableBody, Pagination, styled } from '@mui/material';
import { useNavigate} from "react-router-dom"




export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Coinstable = () => {
    const[coins,setCoins]=useState([])
    const[loading,setLoading]=useState(false)
    const[search, setSearch]=useState("")
    const navigate= useNavigate()
    const[page,setPage]=useState(1)

 const{currency ,symbol}=Cryptostate()


 const Mycomponent = styled('div')({
  '& .MuiPaginationItem-root': {
    color: 'gold',
  },
});

// const Myrow =styled('div')({
//   backgroundColor: "#16171a",
//       cursor: "pointer",
//       "&:hover": {
//         backgroundColor: "#131111",
//       },
//       fontFamily: "Montserrat"
// })

const fetchCoins= async()=>{
    setLoading(true)
  const {data}= await axios.get(CoinList(currency))
  setCoins(data)
  setLoading(false)
}
useEffect(()=>{
fetchCoins()
 // eslint-disable-next-line
},[currency])
console.log(coins)

// const darkTheme = createTheme({
//   palette: {
//     primary: {
//       main: "#fff",
//     },
//     type: "dark",
//   },
// });

const handleSearch = () => {
  return coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search) ||
      coin.symbol.toLowerCase().includes(search)
  );
};

  return (
 
  <Container style={{textAlign:"center"}}>
  <Typography
          variant="h4"
          style={{ margin: 18, fontFamily: "Montserrat" }}
        >
          Cryptocurrency Prices by Market Cap
        </Typography>
        

         <TextField
          label="Search For a Crypto Currency.."
          variant="outlined"
          style={{ marginBottom: 20, width: "100%", placeholderColor:"white"}}
          onChange={(e) => setSearch(e.target.value)}
        />
       
        
        <TableContainer>
      
          {
             loading ? (
              <LinearProgress style={{backgroundColor:'gold'}}/>
            ):(
              <Table>
                  <TableHead style={{ backgroundColor: "#EEBC1D" }}>
                <TableRow>
                  {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                    <TableCell
                      style={{
                        color: "black",
                        fontWeight: "700",
                        fontFamily: "Montserrat",
                      }}
                      key={head}
                      align={head === "Coin" ? "" : "right"}
                    >
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                
                {handleSearch()
                  .slice((page - 1) * 10, (page - 1) * 10 + 10)
                  .map((row) => {
                    const profit = row.price_change_percentage_24h > 0;
                    return (
                      
                      <TableRow
                        onClick={() => navigate(`/coins/${row.id}`)}
                        style={{backgroundColor: "#16171a",
                          cursor: "pointer",
                           "&:hover": {
                          backgroundColor: "#131111",
                        },
                        fontFamily: "Montserrat"}}
                        key={row.name}
                      >


                        <TableCell
                          component="th"
                          scope="row"
                          style={{
                            display: "flex",
                            gap: 15,
                          }}
                        >
                           
                          <img
                            src={row?.image}
                            alt={row.name}
                            height="50"
                            style={{ marginBottom: 10 }}
                          />
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontSize: 22,
                              }}
                            >
                              {row.symbol}
                            </span>
                            <span style={{ color: "darkgrey" }}>
                              {row.name}
                            </span>
                          </div>
                        </TableCell>
                       
                        <TableCell align="right">
                          {symbol}{" "}
                          {numberWithCommas(row.current_price.toFixed(2))}
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{
                            color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                            fontWeight: 500,
                          }}
                        >
                          {profit && "+"}
                          {row.price_change_percentage_24h.toFixed(2)}%
                        </TableCell>
                        <TableCell align="right">
                          {symbol}{" "}
                          {numberWithCommas(
                            row.market_cap.toString().slice(0, -6)
                          )}
                          M
                        </TableCell> 
                       
                      </TableRow>
                     
                    );
                  })}
                 
              </TableBody>
               
              </Table>
            )  
           }
           
        </TableContainer>
        <Mycomponent>
        <Pagination 
          
          count={(handleSearch()?.length / 10).toFixed(0)}
          style={{
            padding: 20,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            TextColor:"gold",
            
          }}
         
          

          onChange={(_, value) => {
            setPage(value);
            window.scroll(0, 450);
          }}
        />
</Mycomponent> 
  </Container>

  
  )
}

export default Coinstable
