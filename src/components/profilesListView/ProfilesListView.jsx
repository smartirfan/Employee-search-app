import React from "react";
import ProfilesListItem from "../profilesListItem/ProfilesListItem";
import Grid from "@material-ui/core/Grid";
import S from "../../elements/styledComponents";

const ProfilesListView = ({ users }) => {
  return (
    <>
      <S.ListViewContainer>
        <Grid container>
          {users.map((user) => (
            <Grid key={user.email} item xs={12}>
              <ProfilesListItem data={user} />
            </Grid>
          ))}
        </Grid>
      </S.ListViewContainer>
    </>
  );
};

export default ProfilesListView;
