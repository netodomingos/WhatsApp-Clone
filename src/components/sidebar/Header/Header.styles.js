import styled from 'styled-components'

export const Container = styled.div``

export const InternalContainer = styled.div`
 height: 60px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 0 10px;
`

export const Avatar = styled.img`
 width: 40px;
 height: 40px;
 border-radius: 20px;
 cursor: pointer;
`

export const Buttons = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
`

export const Button = styled.button`
 display: flex;
 margin: 0 10px;
 justify-content: center;
 align-items: center;
 border: none;
 cursor: pointer;
 width: 20px;
 height: 20px;
 background-color: transparent;
`

export const SearchContainer = styled.div`
  background-color: #f0f0f0;
  height: 50px;
  display: flex;
  align-items: center;
`

export const SearchComponent = styled.div`
  border: 1px solid #FFF;
  width: 95%;
  margin: 0 10px;
  border-radius: 20px;
  padding: 8px 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #FFF;
`

export const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  margin-left: 10px;
  font-size: 13px;
`



