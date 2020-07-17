import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const SearchHeader = styled.div`
  border-radius: 0;
  margin-bottom: 77px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #d0d7d8;
  padding: 30px;
`;

export const SearchFormContainer = styled.div`
  width: 445px;
`;

export const SearchTextbox = styled(TextField)`
  width: 360px;
`;
