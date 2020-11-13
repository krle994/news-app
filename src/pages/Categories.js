import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import Container from "../components/layout/Container";
import Accordion from "../components/ui/Accordion";
import Title from "../components/Typography/Title";
import Spinner from "../components/ui/Spinner";

const categories = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

const StyledContainer = styled(Container)`
  max-width: 95%;
`;

const CategoriesWrapper = styled.div`
  overflow: hidden;
`;

export default () => {
  const { t } = useTranslation();
  const { code, name } = useSelector(({ country }) => country.selectedCountry);

  const renderCategorties = () => {
    return categories.length ? (
      categories.map((category) => {
        const title = category.charAt(0).toUpperCase() + category.slice(1);
        return (
          <Accordion
            key={category}
            category={category}
            title={title}
            to={{
              pathname: "/",
              state: {
                title: t("topCategoryNews", { name, category }),
                category,
              },
            }}
          />
        );
      })
    ) : (
      <Spinner />
    );
  };

  return (
    <StyledContainer>
      <Title>
        {t("categoriesTitle", { num: categories.length })} {code}
      </Title>
      <CategoriesWrapper>{renderCategorties()}</CategoriesWrapper>
    </StyledContainer>
  );
};
