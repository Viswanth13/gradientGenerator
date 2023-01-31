import {GradDirectionButton, ListItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionObject, changeDirection, gradientDirection} = props
  const {displayText, value} = directionObject

  const isTrue = gradientDirection === value

  const onClickDirectionButton = () => {
    changeDirection(value)
  }

  return (
    <>
      <ListItem>
        <GradDirectionButton
          as="button"
          type="button"
          onClick={onClickDirectionButton}
          isTrue={isTrue}
        >
          {displayText}
        </GradDirectionButton>
      </ListItem>
    </>
  )
}

export default GradientDirectionItem
