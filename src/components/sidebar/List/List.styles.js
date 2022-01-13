import styled from 'styled-components'


export const Container = styled.div`
  flex: 1;
  background-color: #FFF;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
  }
` 
export const ChatContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 70px;
  padding: 0 5px;
  cursor: pointer;
  border-bottom: 0.5px solid #ebebeb;

  &:hover {
    background-color: #f0f0f0;
  }
` 
export const Picture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 30px;
`
export const ChatInternalContainer = styled.div`
  display: flex;
  height: 40px;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`
export const Name = styled.span`
  font-size: 16px;
  font-weight: 450;
`
export const Message = styled.span`
  font-size: 12px;
  font-weight: 100;
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`