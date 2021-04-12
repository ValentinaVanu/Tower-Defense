import { Paper } from '@material-ui/core';
import { Form } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 12px 5px;
`;

export const StyledPaper = styled(Paper)`
  align-self: center;
  justify-self: center;
  padding: 2rem;
  margin: 2rem;
  border-top: 5px solid #00a4f1;
  position: relative;
`;