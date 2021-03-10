import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Container } from "./style";

  const randomizeImg = () => {
    var indents= []
    for (let i = 0; i < 1; i++) {
      indents.push(<img src={`https://picsum.photos/300?random=${Math.random()}`} alt="" />)
    }
    return indents;
  }

function Wall() {
  return (
    <>
      <Container>
        {randomizeImg()}
      </Container>
    </>
  );
}

export default Wall
