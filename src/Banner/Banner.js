import React from 'react'
import { Container, Typography } from '@mui/material'
import Carousel from './Carousel'



const Banner = () => {
   
  return (
    <div style={{ backgroundImage: "url(./banner2.jpg)"}}>
     <Container sx={{height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 15,
        justifyContent: "space-around"}}>
          <div style={{ display: "flex",
    height: "10%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",}}>
      <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Crypto Hunter
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>

          </div>
          <Carousel/>
     </Container>
    </div>
  )
}

export default Banner
