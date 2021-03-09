import styled from "styled-components";

const CommandListItemWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 2fr 3fr;
  grid-gap: 60px;
  margin: 60px 0;
  
  a, mark {
    color: #41B883;
    background: none;
  }

  mark {
    white-space: nowrap;
  }
  
  p:not(:last-child) {
    margin-bottom: 20px;
  }
  
  h4 {
    margin-bottom: 10px;
  }
  
  @media (max-width: 960px) {
    grid-template-columns: 100%;
  }
`

const CommandListItemNumber = styled.span`
  min-width: 40px;
  height: 40px;
  background: #000000;
  line-height: 40px;
  text-align: center;
  border-radius: 40px;
`;

const CommandListItemDescription = styled.div`
  margin-left: 16px;
  
`

const DescriptionNumberWrapper = styled.div`
  display: flex;
  align-items: center;
`

const TaskWrapper = styled.div`
  min-width: 100%;
  max-width: 100%;
  width: 100%;
  
  @media (max-width: 960px) {
    padding-left: 52px;
  }
`;

export const CommandListItem = ({number, description, task}) => <>
  <DescriptionNumberWrapper>
    <CommandListItemNumber>{number}</CommandListItemNumber>
    <CommandListItemDescription>{description}</CommandListItemDescription>
  </DescriptionNumberWrapper>

  <TaskWrapper>{task}</TaskWrapper>
</>

export const CommandList = ({items}) => {
  return <CommandListItemWrapper>
    {items.map((item, index) => <CommandListItem {...item} number={index + 1} />)}
  </CommandListItemWrapper>
}
