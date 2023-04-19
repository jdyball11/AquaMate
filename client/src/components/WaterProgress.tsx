import React from "react";
import styled from 'styled-components';
import { useState, useEffect } from "react";


interface Props {
  goal: number;
  current: number;
  size?: number;
}

const WaterProgressWrapper = styled.div<{ size: number }>`
  position: relative;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;

const WaterProgressSvg = styled.svg`
  width: 120%;
  height: 120%;

  circle {
    fill: transparent;
    stroke-width: 50;
    stroke-linecap: round;
    transform: translate(20px, 20px); /* half of the stroke width */
  }

  .background {
    stroke: #eee;
  }

  .progress {
    stroke: #007bff;
    transition: stroke-dashoffset 0.5s ease-out;
  }
`;

const WaterProgressText = styled.span`
  position: absolute;
  top: 55%;
  left: 55%;
  transform: translate(-50%, -50%);
  font-size: 35px;
  font-weight: bold;
  color: #87CEFA;
`;


const WaterProgress: React.FC<Props> = ({ goal, current, size = 300 }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const newProgress = Math.floor((current / goal) * 100);
    setProgress(newProgress > 100 ? 100 : newProgress);
  }, [current, goal]);

  return (
    <WaterProgressWrapper size={size}>
      <WaterProgressSvg>
        <circle
          className="background"
          r={size / 2 - 5}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className="progress"
          r={size / 2 - 5}
          cx={size / 2}
          cy={size / 2}
          strokeDasharray={2 * Math.PI * (size / 2 - 5)}
          strokeDashoffset={2 * Math.PI * (size / 2 - 5) * (1 - progress / 100)}
        />
      </WaterProgressSvg>
      <WaterProgressText>{current} ml / {goal} ml</WaterProgressText>
    </WaterProgressWrapper>
  );
};


export default WaterProgress;