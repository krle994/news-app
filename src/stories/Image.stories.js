import React from "react";

import Image from "../components/ui/Image";

export default {
  title: "Image",
  component: Image,
};

export const Default = () => <Image src="https://www.fillmurray.com/640/360" />;

export const Broken = () => <Image src="notvalid" />;
