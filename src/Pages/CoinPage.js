import React from 'react'
import Coininfo  from '../Components/Coininfo';
import {useParams }from "react-router-dom";
import { useState ,useEffect} from 'react';
import { Cryptostate } from '../Cryptocontext';
import axios from 'axios';
import { SingleCoin } from '../Config/api';
import styled from '@emotion/styled';
import { LinearProgress } from '@mui/material';
import {Typography} from '@mui/material';
import ReactHtmlParser from "react-html-parser"

import { numberWithCommas } from "../Components/Coinstable";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { currency, symbol } = Cryptostate();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const MyContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  }));
  const Mysidebar = styled('div')(({ theme }) =>({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 25,
    borderRight: "2px solid grey",
  }));

  const Myheading = styled('div')({
    fontWeight: "bold",
      marginBottom: 20,
      fontFamily: "Montserrat",
  });

  const Mydescription = styled('div')({
  width: "100%",
  fontFamily: "Montserrat",
  padding: 25,
  paddingBottom: 15,
  paddingTop: 0,
  textAlign: "justify"
  })

  const Marketdata = styled('div')(({ theme }) =>({
    alignSelf: "start",
      padding: 25,
      paddingTop: 10,
      width: "100%",
      [theme.breakpoints.down("md")]: {
        display: "flex",
        justifyContent: "space-around",
      },
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
      },
      [theme.breakpoints.down("xs")]: {
        alignItems: "start",
      },
  }))


  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;
  return (
    <MyContainer>
      <Mysidebar>
      <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Myheading>

        <Typography variant="h3">
          {coin?.name}
        </Typography>
        </Myheading>
        <Mydescription>
        <Typography variant="subtitle1" >
          { ReactHtmlParser(coin?.description.en.split(". ")[0])}.
        </Typography>
        </Mydescription>
        <Marketdata>
        <span style={{ display: "flex" }}>
            <Typography variant="h5" style={{ fontWeight: "bold",marginBottom: 20,
            fontFamily: "Montserrat"}}>
                   
              Rank:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {numberWithCommas(coin?.market_cap_rank)}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" style={{ fontWeight: "bold",marginBottom: 20,
            fontFamily: "Montserrat"}}>
                   
              Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
               {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" style={{ fontWeight: "bold",marginBottom: 20,
            fontFamily: "Montserrat"}}>
                   
              Market Cap:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M
            </Typography>
          </span>
        </Marketdata>

        
      

      </Mysidebar>
      <Coininfo coin={coin} />
    </MyContainer>
     
    
  )
}

export default CoinPage
