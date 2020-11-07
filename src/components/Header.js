import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { NavLink } from 'react-router-dom';

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

    return (
        <StyledHeader>
            <div>
                <StyledNavLink to="/">{t("Top News")}</StyledNavLink>
                <StyledNavLink to="/categories">{t("Categories")}</StyledNavLink>
                <StyledNavLink to="/search">{t("Search")}</StyledNavLink>
            </div>
            <div>
                <CountryButton>GB</CountryButton>
                <CountryButton>US</CountryButton>
            </div>
        </StyledHeader>
    );
};

export default Header;
