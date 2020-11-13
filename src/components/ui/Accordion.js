import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from './Carousel';
import Spinner from './Spinner';

import { getCategoryArticles } from '../../store/actions/news';

import Button from './Button';
import Arrow from '../icons/Arrow';

const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #e4e4e4;
  margin-bottom: 1rem;
`;

const AccordionAction = styled(Button)`
  text-align: left;
  padding: 1rem;
`;

const AccordionContent = styled.div`
  background-color: white;
  overflow: auto;
  transition: max-height 0.6s ease;
`;

const StyledLink = styled(Button)`
  font-size: ${(props) => props.theme.fontSize.regular};
`;

const StyledArrow = styled(Arrow)`
  margin-left: 1rem;
  transition: border-color 0.3s ease, transform 0.6s ease;
`;

export default ({ to, title, category }) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState('0px');
  const [rotate, setRotate] = useState('down');

  const dispatch = useDispatch();
  const articles = useSelector(({ news }) => news.categoryArticles);

  const content = useRef(null);

  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? '0px' : '350px');
    setRotate(active ? 'down' : 'up');

    if (articles[category].length <= 0) {
      dispatch(getCategoryArticles(category));
    }
  }

  return (
    <AccordionWrapper>
      <AccordionAction onClick={toggleAccordion}>
        <StyledLink link="true" to={to}>
          {title}
        </StyledLink>
        <StyledArrow className={`${rotate}`} />
      </AccordionAction>
      <AccordionContent ref={content} style={{ maxHeight: `${height}` }}>
        {articles && articles[category].length ? (
          <Carousel articles={articles[category]} />
        ) : (
          <Spinner />
        )}
      </AccordionContent>
    </AccordionWrapper>
  );
};
