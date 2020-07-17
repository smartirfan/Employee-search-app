import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfilesCardView from "../profilesCardView/ProfilesCardView";
import ProfilesListView from "../profilesListView/ProfilesListView";
import { fetchLatestNinjasProfiles } from "../../store/actions/searchActions";

function LatestNinjasProfiles({ searchString, sortValue, isCardViewSelected }) {
  const [isLoading, setIsLoading] = useState(true);
  let filteredNinjasProfiles = "";
  const dispatch = useDispatch();

  let latestNinjasProfiles = useSelector(
    (state) => state.search.latestNinjasProfiles
  );

  const SortProfiles = () => {
    if (sortValue === "name") {
      latestNinjasProfiles.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    } else if (sortValue === "office") {
      latestNinjasProfiles.sort(function (a, b) {
        if (a.office < b.office) {
          return -1;
        }
        if (a.office > b.office) {
          return 1;
        }
        return 0;
      });
    }
  };

  const FilteredProfiles = () => {
    SortProfiles();
    searchString && searchString.split(",")
      ? (filteredNinjasProfiles = latestNinjasProfiles
          .filter((ninjaName) => searchString.includes(ninjaName.name))
          .concat(
            latestNinjasProfiles.filter((ninjaOffice) =>
              searchString.includes(ninjaOffice.office)
            )
          )
          .concat(
            latestNinjasProfiles.filter((ninjaGithub) =>
              searchString.includes(ninjaGithub.gitHub)
            )
          )
          .concat(
            latestNinjasProfiles.filter((ninjaTwitter) =>
              searchString.includes(ninjaTwitter.twitter)
            )
          ))
      : (filteredNinjasProfiles = latestNinjasProfiles);
    return filteredNinjasProfiles;
  };

  const RenderProfiles = () =>
    isCardViewSelected ? (
      <ProfilesCardView users={FilteredProfiles()} />
    ) : (
      <ProfilesListView users={FilteredProfiles()} />
    );

  const fetchNinjasProfiles = async () => {
    await dispatch(fetchLatestNinjasProfiles());
    return setIsLoading(false);
  };

  useEffect(() => {
    fetchNinjasProfiles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{isLoading ? "Loading..." : <RenderProfiles />}</>;
}

export default LatestNinjasProfiles;
