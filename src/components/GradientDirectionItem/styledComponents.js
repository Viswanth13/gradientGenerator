import styled from 'styled-components'

export const GradDirectionButton = styled.button`
  background-color: #ededed;
  color: #334155;
  font-weight: bold;
  border-radius: 5px;
  padding: 5px;
  opacity: ${props => (props.isTrue ? 1 : 0.5)};
`

export const ListItem = styled.li`
  list-style-type: none;
`
