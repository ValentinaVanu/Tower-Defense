import styled from "styled-components";
import { Paper, TextField } from "@material-ui/core";
import { Form } from "formik";
import { Link } from '@reach/router';


export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #00a4f1;
  margin-top: 22px;

  :hover {
    color: #44650a;
  }
`

export const StyledFormHeader = styled(Link)`
  text-decoration: none;
  position: absolute;
  background-color: #00a4f1;
  top: -35px;
  right: 0px;
  padding: 6px 28px;
  border-radius: 10px 10px 0 0;
  cursor: pointer;
  color: #fff;
  :hover{
    /* background-color: #ec1c24; */
    background-color: #44650a;
    /* border-bottom: 5px solid #44650a; */
  }
`;

export const StyledFormTitle = styled.h1`
  color: #00a4f1;
  text-align: center;
`;

export const StyledTextField = styled(TextField)`
  && {
    margin: 10px;
  }
`;

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
