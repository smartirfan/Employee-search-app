import React from "react";
import S from "../../elements/styledComponents";
import defaultImage from "../../assets/user.svg";
import linkedinImage from "../../assets/linkedin.svg";
import githubImage from "../../assets/github.svg";
import twitterImage from "../../assets/twitter.svg";

const ProfilesListItem = ({ data }) => {
  const {
    name,
    office,
    mainText,
    imagePortraitUrl,
    linkedIn,
    gitHub,
    twitter,
  } = data;

  return (
    <>
      <S.ListItemContainer>
        <div>
          <S.ListImage
            src={imagePortraitUrl ? imagePortraitUrl : defaultImage}
          />
        </div>
        <S.ListItemDetails>
          <S.ListText>
            <strong>{name}</strong>
          </S.ListText>
          <S.ListText>Office:&nbsp;{office}</S.ListText>
          <S.ListParagraph>
            {mainText ? mainText.replace(/<[^>]*>?/gm, "") : ""}
          </S.ListParagraph>
          <S.ListContactInfo>
            {linkedIn ? (
              <a
                href={`https://www.linkedin.com` + linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex="0"
              >
                <S.ListIcon src={linkedinImage} />
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
                <S.ListIcon src={githubImage} />
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
                <S.ListIcon src={twitterImage} />
              </a>
            ) : (
              ""
            )}
          </S.ListContactInfo>
        </S.ListItemDetails>
      </S.ListItemContainer>
    </>
  );
};

export default ProfilesListItem;
