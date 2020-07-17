import React from "react";
import ProfilesCardItem from "../profilesCardItem/ProfilesCardItem";
import Grid from "@material-ui/core/Grid";

const ProfilesCardView = ({ users }) => {
  return (
    <>
      <Grid container spacing={2} justify="center">
        {users.map((user) => (
          <Grid key={user.email} item xs={12} sm={3}>
            <ProfilesCardItem data={user} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProfilesCardView;
