import styled from 'styled-components'

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(
    to ${props => props.gradientDirection},
    ${props => props.firstColor},
    ${props => props.secondColor}
  );
`

export const Heading = styled.h1`
  color: #ffffff;
`

export const ParagraphElement = styled.p`
  color: #ffffff;
`

export const InputsContainer = styled.div`
  display: flex;
`
export const ColorPickerContainer = styled.div`
  height: 200px;
  margin: 20px;
  display: flex;
  flex-direction: column;
`

export const HexCode = styled.p`
  color: #ffffff;
`

export const InputColor = styled.input`
  width: 100px;
`

export const ButtonsContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 400px;
`

export const GenerateButton = styled.button`
  background-color: #00c9b7;
  color: #000;
  padding: 10px;
  border-radius: 7px;
`
