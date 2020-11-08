import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { setSelectedCountry } from '../store/actions/country';

const StyledHeader = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    padding: 2rem 1rem;
`;

const CountryButton = styled.button`
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 2rem 1rem;
`;

const Header = () => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const selectedCountry = useSelector(
        (state) => state.country.selectedCountry
    );
    const countries = useSelector((state) => state.country.countries);

    const getActiveClass = (code) => {
        return selectedCountry && selectedCountry.code === code ? "active" : "";
    };

    const handleCountryChange = (country) => {
        dispatch(setSelectedCountry(country));
    }

    return (
        <StyledHeader>
            <div>
                <StyledNavLink to="/">{t("Top News")}</StyledNavLink>
                <StyledNavLink to="/categories">
                    {t("categories")}
                </StyledNavLink>
                <StyledNavLink to="/search">{t("search")}</StyledNavLink>
            </div>
            <div>
                {countries.length
                    ? countries.map((country) => {
                          return (
                              <CountryButton
                                  className={getActiveClass(country.code)}
                                  key={country.code}
                                  onClick={() => handleCountryChange(country)}
                              >
                                  {country.code}
                              </CountryButton>
                          );
                      })
                    : null}
            </div>
        </StyledHeader>
    );
};

export default Header;
