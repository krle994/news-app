import styled from 'styled-components';
import { useLocation, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Container from '../components/layout/Container';
import Button from '../components/ui/Button';
import Image from '../components/ui/Image';
import Arrow from '../components/icons/Arrow';
import Title from '../components/Typography/Title';
import Paragraph from '../components/Typography/Paragraph';

const StyledImage = styled(Image)`
  width: 100%;
`;

const StyledContent = styled(Paragraph)`
  color: ${(props) => props.theme.colors.title};
  font-size: ${(props) => props.theme.fontSize.regular};
  padding: 2rem 0;
`;

const BackLink = styled(Button)`
  font-size: ${(props) => props.theme.fontSize.regular};

  &:hover > * {
    border-color: ${(props) => props.theme.colors.main};
  }
`;

export default () => {
  const location = useLocation();
  const history = useHistory();
  const { t } = useTranslation();
  const localStorageArticle = localStorage.getItem('article');
  let article = localStorageArticle ? JSON.parse(localStorageArticle) : null;

  if (location.state) {
    article = location.state;
    localStorage.setItem('article', JSON.stringify(article));
  } else if (localStorageArticle) {
    if (
      article !== null
      && JSON.parse(localStorageArticle).title !== article.title
    ) {
      localStorage.setItem('article', JSON.stringify(article));
    } else {
      article = JSON.parse(localStorageArticle);
    }
  }

  const {
    title, imgSrc, description, content,
  } = article;

  return (
    <Container>
      <Title>{title}</Title>
      <StyledImage src={imgSrc} alt={description} />
      <StyledContent>{content}</StyledContent>
      <BackLink onClick={() => history.goBack()}>
        <Arrow className="left" />
        {' '}
        {t('back')}
      </BackLink>
    </Container>
  );
};
