import styled from "styled-components";
import { Paper } from "@material-ui/core";

export const ListViewContainer = styled(Paper)`
  width: 97%;
  .MuiGrid-item {
    border-bottom: 1px solid gray;
  }
  .MuiGrid-item:last-child {
    border-bottom: none;
  }
`;

export const ListItemContainer = styled.div`
  display: flex;
  padding: 15px 0;
  font-size: 0.8rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  line-height: 1.5;
`;

export const ListItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
`;

export const ListText = styled.div`
  padding: 2px;
  margin-top: 5px;
`;

export const ListParagraph = styled.div`
  padding: 2px;
  margin: 2px 10px 2px 0;
`;

export const ListImage = styled.img`
  height: 149px;
  width: 139px;
  margin: 0 30px;
`;

export const ListContactInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ListIcon = styled.img`
  height: 25px;
  width: 25px;
  padding: 2px;
  margin-top: 2px;
`;
