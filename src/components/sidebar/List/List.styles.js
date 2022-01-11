import styled from 'styled-components'


export const Container = styled.div`
  height: 100vh;
  background-color: #FFF;
  display: flex;
  flex-direction: column;
` 
export const ChatContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  padding: 0 5px;
  cursor: pointer;
  border-bottom: 0.5px solid #ebebeb;

  &:hover {
    background-color: #f0f0f0;
  }
` 
export const Picture = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 20px;
`
export const ChatInternalContainer = styled.div`
  display: flex;
  height: 30px;
  flex-direction: column;
  justify-content: center;
  margin-left: 7px;
`
export const Name = styled.span`
  font-size: 10px;
  font-weight: 400;

`
export const Message = styled.span`
  font-size: 6px;
  font-weight: 300;
  max-width: 135px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`