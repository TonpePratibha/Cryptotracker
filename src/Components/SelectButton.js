import React from 'react'
import styled from '@emotion/styled'
const SelectButton = ({children , selected,onClick}) => {

  const Myspan = styled('div')(({ theme }) =>({
    border: "1px solid gold",
    borderRadius: 5,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: "Montserrat",
    cursor: "pointer",
    backgroundColor: selected ? "gold" : "",
    color: selected ? "black" : "",
    fontWeight: selected ? 700 : 500,
    "&:hover": {
      backgroundColor: "gold",
      color: "black",
    },
    width: "22%",
    //   margin: 5,
  
  }))
  return (
    <Myspan onClick={onClick}>
      {children}
    </Myspan>
  )
}

export default SelectButton
