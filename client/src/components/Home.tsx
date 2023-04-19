import React from "react";
import styled from 'styled-components';
import { useState, useEffect } from "react";
import WaterProgress from "./WaterProgress";


const Home: React.FC = () => {

  const WaterProgressContainer = styled.div`
    width: 100%;
    padding: 50px 35px 0 0;
    display: flex;
    justify-content: center;
  `

  return (
      <WaterProgressContainer>
        <WaterProgress current={1500} size={300} goal={2000} />
      </WaterProgressContainer>
  )
}

export default Home