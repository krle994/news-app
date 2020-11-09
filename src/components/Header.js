import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

import { setSelectedCountry } from "../store/actions/country";

import Button from "./Button";

const StyledHeader = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    border-radius: 0 0 40px 40px;
    box-shadow: 0px -2px 10px 0px ${(props) => props.theme.colors.text};
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    padding: 2rem 1rem;
    color: ${(props) => props.theme.colors.text};
    transition: color 0.3s ease;
    &.active,
    &:hover {
        color: ${(props) => props.theme.colors.main};
    }
`;

const CountryButton = styled(Button)`
    padding: 2rem 1rem;
`;

const Header = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const selectedCountry = useSelector(
        (state) => state.country.selectedCountry
    );
    const countries = useSelector((state) => state.country.countries);
    const location = useLocation();
    const isArticlePage = location.pathname === "/news";

    const getActiveClass = (code) => {
        return isArticlePage
            ? "disabled"
            : selectedCountry.code === code
            ? "active"
            : "";
    };

    const handleCountryChange = (country) => {
        if (!isArticlePage) {
            dispatch(setSelectedCountry(country));
        }
    };

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
