// Write your Character component here
import React from 'react';
import styled from "styled-components";

const CharacterCard = styled.div`
  background: #e89242ff;
  color: black;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 650px;
  margin-bottom: 20px;
  box-shadow: 2px 2px 2px grey;
`;

const CharacterImg = styled.img`
  width: 200px;
  height: 200px;
`;

const Character = (props) => {
    return (
        <CharacterCard>
            <h2>{props.name}</h2>
            <CharacterImg top width="10%" src={props.img} alt="Characters" />
            <p>{props.species}</p>
            <p>{props.gender}</p>
            <p>{props.status}</p>
        </CharacterCard>
    )
}

export default Character;