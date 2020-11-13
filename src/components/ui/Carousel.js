import Carousel from 'react-grid-carousel';
import { v4 as uuid } from 'uuid';

import NewsCard from '../NewsCard';
import Spinner from './Spinner';

export default (props) => (
  <Carousel cols={5} rows={1} gap={10} loop {...props}>
    {props.articles && props.articles.length ? (
      props.articles.map(({
        title, urlToImage, description, content,
      }) => (
        <Carousel.Item key={uuid()}>
          <NewsCard
            title={title}
            imgSrc={urlToImage}
            description={description}
            content={content}
            imgHeight="100px"
            small="true"
          />
        </Carousel.Item>
      ))
    ) : (
      <Spinner />
    )}
  </Carousel>
);
