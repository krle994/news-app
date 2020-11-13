import React from "react";

import NewsCard from "../components/NewsCard";

export default {
  title: "NewsCard",
  component: NewsCard,
};

const title =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas dolor id velit dolorem sed recusandae maiores animi, culpa aliquid.";

const description =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas dolor id velit dolorem sed recusandae maiores animi, culpa aliquid. Repudiandae inventore, enim ipsam consequuntur harum incidunt corporis rem necessitatibus molestias.";

const imgSrc = "https://source.unsplash.com/random";

const content =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas dolor id velit dolorem sed recusandae maiores animi, culpa aliquid. Repudiandae inventore, enim ipsam consequuntur harum incidunt corporis rem necessitatibus molestias.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas dolor id velit dolorem sed recusandae maiores animi, culpa aliquid. Repudiandae inventore, enim ipsam consequuntur harum incidunt corporis rem necessitatibus molestias.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas dolor id velit dolorem sed recusandae maiores animi, culpa aliquid. Repudiandae inventore, enim ipsam consequuntur harum incidunt corporis rem necessitatibus molestias.";

export const Default = () => (
  <NewsCard
    title={title}
    description={description}
    content={content}
    imgSrc={imgSrc}
  />
);

export const Small = () => (
  <NewsCard
    title={title}
    description={description}
    content={content}
    imgSrc={imgSrc}
    small
  />
);

export const NoPicture = () => (
  <NewsCard title={title} description={description} content={content} />
);
