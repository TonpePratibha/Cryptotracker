import { AppBar, Container, MenuItem, Select,  Toolbar, Typography} from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Cryptostate } from '../Cryptocontext'


const Header = () => {
  const navigate=useNavigate()
const {currency, setCurrency}=Cryptostate()
console.log(currency)
  return (
    
    <AppBar color='transparent' position='static'>
        <Container>
            <Toolbar>
                <Typography onClick={()=>navigate("/")} sx={{flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",}}
    variant="h6"
    >
        Crypto Hunter
        </Typography>
                <Select varient="outlined"
                 value={currency}
                onChange={(e)=>setCurrency(e.target.value)}

                 style={{width:100 ,height:40, marginLeft:15 ,color:"white"}}
                 
              >
                    <MenuItem value={"USD"}>USD</MenuItem>
                    <MenuItem value={"INR"}>INR</MenuItem>
                </Select>
                    
            </Toolbar>
        </Container>
         
    </AppBar>
    
  )
}

export default Header

