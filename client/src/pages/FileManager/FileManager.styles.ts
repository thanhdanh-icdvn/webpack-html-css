import styled from 'styled-components'

export const ThumbsContainer = styled.aside`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 16px;
`
export const Thumb = styled.div`
  display: inline-flex;
  border-radius: 2px;
  border: '1px solid red';
  margin-bottom: 8px;
  margin-right: 8px;
  width: 300px;
  height: 300px;
  padding: 4px;
  box-sizing: 'border-box';
`
export const ThumbInner = styled.div`
  display: flex;
  min-width: 0;
  overflow: hidden;
`
export const ThumbImage = styled.img`
  display: block;
  width: auto;
  height: 100%;
`
