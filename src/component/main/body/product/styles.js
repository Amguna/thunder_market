import styled from 'styled-components';

export const Container = styled.button`
  display:flex;
  flex-direction:column;
  width:207px;
  height:300px;
  background-color:white;
  border:1px solid grey;
  margin-top:20px;
  padding:0;
`

export const Thumbnail = styled.img`
  width:100%;
  height:220px;
`

export const TitleContainer = styled.div`
  width:100%;
  height:30px;
  padding:5px;
`

export const ProductInfoContainer = styled.div`
  display:flex;
  flex:1;
  flex-direction:row;
  justify-content:space-between;
  width:100%;

`

export const PriceTag = styled.h3`
  text-align:left;
  padding-left:5px;
  height:100%;
  margin:0;
`

export const TimeTag = styled.div`
  text-align:right;
  padding-right:5px;
  height:100%;
`