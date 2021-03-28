import styled from 'styled-components';

export const StyledMainGrid = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4 1fr);
  grid-template-rows: repeat(4 1fr);
  grid-gap: 10px;
`