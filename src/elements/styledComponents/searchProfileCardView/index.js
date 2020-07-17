import styled from "styled-components";
import Paper from "@material-ui/core/Paper";

export const CardViewContainer = styled(Paper)`
  position: relative;
  padding: 5px;
  height: 225px;
  width: 200px;
  text-align: center;
`;

export const CardSection = styled.div`
  margin-top: 2px;
`;

export const CardText = styled.div`
  font-size: 0.8rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  line-height: 1.5;
`;

export const CardOffice = styled.div`
  margin-top: 9px;
  margin-bottom: 7px;
`;

export const CardImage = styled.img`
  height: 149px;
  width: 139px;
`;

export const CardIcon = styled.img`
  height: 17px;
  width: 17px;
  padding-left: 3px;
`;
