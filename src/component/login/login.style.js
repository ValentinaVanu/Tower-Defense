import styled from 'styled-components';
import { Paper, TextField } from '@material-ui/core';
import { Form } from 'formik';


export const StyledTextField = styled(TextField)`
  && {
    margin: 10px;
  }
`

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 12px 5px;
`

export const StyledPaper = styled(Paper)`
  align-self: center;
  justify-self: center;
  padding: 2rem;
  margin: 2rem;
`