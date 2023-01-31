import {Component} from 'react'
import {
  TotalContainer,
  Heading,
  ParagraphElement,
  InputsContainer,
  ButtonsContainer,
  ColorPickerContainer,
  HexCode,
  InputColor,
  GenerateButton,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: '#014f7b',
    direction: gradientDirectionsList[0].value,
    inputColor1: '#8ae323',
    inputColor2: '#014f7b',
  }

  changeDirection = value => {
    this.setState({direction: value})
  }

  changeColorOne = event => {
    this.setState({inputColor1: event.target.value})
  }

  changeColorTwo = event => {
    this.setState({inputColor2: event.target.value})
  }

  changeIsGenerated = () => {
    const {inputColor1, inputColor2} = this.state
    this.setState({color1: inputColor1, color2: inputColor2})
  }

  render() {
    const {color1, color2, direction, inputColor1, inputColor2} = this.state

    return (
      <>
        <TotalContainer
          gradientDirection={direction}
          firstColor={color1}
          secondColor={color2}
          data-testid="gradientGenerator"
        >
          <Heading>Generate a CSS Color Gradient</Heading>
          <ParagraphElement>Choose Direction</ParagraphElement>

          <ButtonsContainer>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                key={each.directionId}
                directionObject={each}
                gradientDirection={direction}
                changeDirection={this.changeDirection}
              />
            ))}
          </ButtonsContainer>
          <ParagraphElement>Pick the Colors</ParagraphElement>
          <InputsContainer>
            <ColorPickerContainer>
              <HexCode htmlFor="color-1">{inputColor1}</HexCode>
              <InputColor
                type="color"
                value={inputColor1}
                id="color-1"
                onChange={this.changeColorOne}
              />
            </ColorPickerContainer>
            <ColorPickerContainer>
              <HexCode htmlFor="color-2">{inputColor2}</HexCode>
              <InputColor
                type="color"
                value={inputColor2}
                id="color-2"
                onChange={this.changeColorTwo}
              />
            </ColorPickerContainer>
          </InputsContainer>
          <GenerateButton type="button" onClick={this.changeIsGenerated}>
            Generate
          </GenerateButton>
        </TotalContainer>
        )
      </>
    )
  }
}

export default GradientGenerator
