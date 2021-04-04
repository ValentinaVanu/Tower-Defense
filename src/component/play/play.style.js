import styled from 'styled-components';

export const StyledPlayWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  cursor: url(${({ selectedImg }) => `${selectedImg} width='32' height='32'`}) 16 16, pointer;
`