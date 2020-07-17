import React, { useState } from "react";
import S from "../elements/styledComponents";
import LatestNinjasProfiles from "../components/latestNinjasProfiles/LatestNinjasProfiles";
import { FormControl } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// ASSETS
import ListViewSelected from "../assets/SearchListSelected.svg";
import ListViewUnselected from "../assets/SearchListUnselected.svg";
import CardViewUnselected from "../assets/SearchCardUnselected.svg";
import CardViewSelected from "../assets/SearchCardSelected.svg";

const Ninjas = () => {
  const [isCardViewSelected, setIsCardViewSelected] = useState(true);
  const [searchString, setSearchString] = useState("");
  const [sortValue, setSortValue] = useState("");

  const handleChange = (event) => {
    setSortValue(event.target.value);
  };

  return (
    <>
      <S.SearchHeader>
        <FormControl>
          <S.SearchFormContainer>
            <S.SearchTextbox
              id="outlined-helperText"
              name="searchInputValue"
              type="search"
              label="Name,Office,Github,Twitter..."
              variant="outlined"
              autoFocus
              tabIndex="0"
              defaultValue={searchString}
              onChange={(event) => {
                setSearchString(event.target.value);
              }}
            />
          </S.SearchFormContainer>
        </FormControl>
      </S.SearchHeader>
      <S.SearchBody>
        <S.SearchHeadline>
          <S.SearchResultViewSelection>
            <img
              src={isCardViewSelected ? CardViewSelected : CardViewUnselected}
              alt="Cardview"
              onClick={() => setIsCardViewSelected(true)}
              onKeyPress={() => setIsCardViewSelected(true)}
              tabIndex="0"
            />
            <img
              src={isCardViewSelected ? ListViewUnselected : ListViewSelected}
              alt="Listview"
              onClick={() => setIsCardViewSelected(false)}
              onKeyPress={() => setIsCardViewSelected(false)}
              tabIndex="0"
            />
          </S.SearchResultViewSelection>

          <RadioGroup
            aria-label="anonymous"
            name="sorting"
            value={sortValue}
            onChange={handleChange}
            row
          >
            <FormControlLabel
              value="name"
              control={<Radio color="primary" />}
              label="Sort by name"
            />
            <FormControlLabel
              value="office"
              control={<Radio color="primary" />}
              label="Sort by office"
            />
          </RadioGroup>
        </S.SearchHeadline>
        {searchString ? (
          <LatestNinjasProfiles
            searchString={searchString}
            sortValue={sortValue}
            isCardViewSelected={isCardViewSelected}
          />
        ) : (
          <LatestNinjasProfiles
            searchString={""}
            sortValue={sortValue}
            isCardViewSelected={isCardViewSelected}
          />
        )}
      </S.SearchBody>
    </>
  );
};

export default Ninjas;
