import styled from "styled-components";

export const Close = styled.div`
    position: absolute;
    right: 4rem;
    top: 2rem;
    cursor: pointer;
`;

export const AmbientDisplay = styled.div`
  @property --percentage {
    syntax: "<percentage>";
    inherits: false;
    initial-value: 5%;
  }

  @keyframes breatheAnimation {
    0% {
      --percentage: 5%;
    }
    50% {
      --percentage: 40%;
    }
    100% {
      --percentage: 5%;
    }
  }

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: radial-gradient(
    circle,
    rgba(253, 251, 242, 1.0) var(--percentage),
    rgba(230, 177, 84, 1.0) 50%
  );
  animation: breatheAnimation 11s ease-in-out infinite alternate;
`;