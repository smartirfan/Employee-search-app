import React from "react";
import S from "../../elements/styledComponents";
import defaultImage from "../../assets/user.svg";
import linkedinImage from "../../assets/linkedin.svg";
import githubImage from "../../assets/github.svg";
import twitterImage from "../../assets/twitter.svg";
import { Box } from "@material-ui/core";

const ProfilesCardItem = ({ data }) => {
  const { name, office, imagePortraitUrl, gitHub, twitter, linkedIn } = data;

  return (
    <div>
      <S.CardViewContainer>
        <S.CardImage src={imagePortraitUrl ? imagePortraitUrl : defaultImage} />
        <div style={{ position: "absolute", bottom: "10px" }}>
          <S.CardSection>
            <S.CardSection>
              <Box display="flex" flexDirection="row" alignItems="stretch">
                <S.CardText>{name ? name : "Name"}</S.CardText>
                &nbsp;
                {linkedIn ? (
                  <a
                    href={`https://www.linkedin.com` + linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex="0"
                  >
                    <S.CardIcon src={linkedinImage} />
                  </a>
                ) : (
                  ""
                )}
                {gitHub ? (
                  <a
                    href={`https://www.github.com/` + gitHub}
                    target="_blank"
                    title={gitHub}
                    rel="noopener noreferrer"
                    tabIndex="0"
                  >
                    <S.CardIcon src={githubImage} />
                  </a>
                ) : (
                  ""
                )}
                {twitter ? (
                  <a
                    href={`https://www.twitter.com/` + twitter}
                    target="_blank"
                    title={twitter}
                    rel="noopener noreferrer"
                    tabIndex="0"
                  >
                    <S.CardIcon src={twitterImage} />
                  </a>
                ) : (
                  ""
                )}
              </Box>
            </S.CardSection>
          </S.CardSection>
          <S.CardSection>
            <Box display="flex">
              <S.CardText>Office:&nbsp;{office}</S.CardText>
            </Box>
          </S.CardSection>
        </div>
      </S.CardViewContainer>
    </div>
  );
};

export default ProfilesCardItem;
