import React from "react";

import Carousel from "../components/ui/Carousel";

const articles = [
  {
    title:
      "Here’s how much Rivian’s electric truck and SUV will cost when they come out in 2021 - The Verge",
    description:
      "Rivian unveiled the pricing for its forthcoming electric truck and SUV. The R1T pickup truck will cost $75,000, while the R1S SUV will retail for $77,500. The company also unveiled plans for a “hands-free” driver assistance system.",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/SSE_JX2UzT7gjw-V3hgVRszyAOU=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/18276961/rivian_electric_truck_3736.jpg",
    content:
      "The buzzy startup also unveiled plans for hands-free highway driving\r\nPhoto by Sean OKane / The Verge\r\nRivian, the electric vehicle startup based in Michigan and California, revealed this week the pr… [+2227 chars]",
  },
  {
    title:
      "Here’s how much Rivian’s electric truck and SUV will cost when they come out in 2021 - The Verge",
    description:
      "Rivian unveiled the pricing for its forthcoming electric truck and SUV. The R1T pickup truck will cost $75,000, while the R1S SUV will retail for $77,500. The company also unveiled plans for a “hands-free” driver assistance system.",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/SSE_JX2UzT7gjw-V3hgVRszyAOU=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/18276961/rivian_electric_truck_3736.jpg",
    content:
      "The buzzy startup also unveiled plans for hands-free highway driving\r\nPhoto by Sean OKane / The Verge\r\nRivian, the electric vehicle startup based in Michigan and California, revealed this week the pr… [+2227 chars]",
  },
  {
    title:
      "Here’s how much Rivian’s electric truck and SUV will cost when they come out in 2021 - The Verge",
    description:
      "Rivian unveiled the pricing for its forthcoming electric truck and SUV. The R1T pickup truck will cost $75,000, while the R1S SUV will retail for $77,500. The company also unveiled plans for a “hands-free” driver assistance system.",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/SSE_JX2UzT7gjw-V3hgVRszyAOU=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/18276961/rivian_electric_truck_3736.jpg",
    content:
      "The buzzy startup also unveiled plans for hands-free highway driving\r\nPhoto by Sean OKane / The Verge\r\nRivian, the electric vehicle startup based in Michigan and California, revealed this week the pr… [+2227 chars]",
  },
  {
    title:
      "Here’s how much Rivian’s electric truck and SUV will cost when they come out in 2021 - The Verge",
    description:
      "Rivian unveiled the pricing for its forthcoming electric truck and SUV. The R1T pickup truck will cost $75,000, while the R1S SUV will retail for $77,500. The company also unveiled plans for a “hands-free” driver assistance system.",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/SSE_JX2UzT7gjw-V3hgVRszyAOU=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/18276961/rivian_electric_truck_3736.jpg",
    content:
      "The buzzy startup also unveiled plans for hands-free highway driving\r\nPhoto by Sean OKane / The Verge\r\nRivian, the electric vehicle startup based in Michigan and California, revealed this week the pr… [+2227 chars]",
  },
  {
    title:
      "Here’s how much Rivian’s electric truck and SUV will cost when they come out in 2021 - The Verge",
    description:
      "Rivian unveiled the pricing for its forthcoming electric truck and SUV. The R1T pickup truck will cost $75,000, while the R1S SUV will retail for $77,500. The company also unveiled plans for a “hands-free” driver assistance system.",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/SSE_JX2UzT7gjw-V3hgVRszyAOU=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/18276961/rivian_electric_truck_3736.jpg",
    content:
      "The buzzy startup also unveiled plans for hands-free highway driving\r\nPhoto by Sean OKane / The Verge\r\nRivian, the electric vehicle startup based in Michigan and California, revealed this week the pr… [+2227 chars]",
  },
  {
    title:
      "Here’s how much Rivian’s electric truck and SUV will cost when they come out in 2021 - The Verge",
    description:
      "Rivian unveiled the pricing for its forthcoming electric truck and SUV. The R1T pickup truck will cost $75,000, while the R1S SUV will retail for $77,500. The company also unveiled plans for a “hands-free” driver assistance system.",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/SSE_JX2UzT7gjw-V3hgVRszyAOU=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/18276961/rivian_electric_truck_3736.jpg",
    content:
      "The buzzy startup also unveiled plans for hands-free highway driving\r\nPhoto by Sean OKane / The Verge\r\nRivian, the electric vehicle startup based in Michigan and California, revealed this week the pr… [+2227 chars]",
  },
  {
    title:
      "Here’s how much Rivian’s electric truck and SUV will cost when they come out in 2021 - The Verge",
    description:
      "Rivian unveiled the pricing for its forthcoming electric truck and SUV. The R1T pickup truck will cost $75,000, while the R1S SUV will retail for $77,500. The company also unveiled plans for a “hands-free” driver assistance system.",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/SSE_JX2UzT7gjw-V3hgVRszyAOU=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/18276961/rivian_electric_truck_3736.jpg",
    content:
      "The buzzy startup also unveiled plans for hands-free highway driving\r\nPhoto by Sean OKane / The Verge\r\nRivian, the electric vehicle startup based in Michigan and California, revealed this week the pr… [+2227 chars]",
  },
  {
    title:
      "Here’s how much Rivian’s electric truck and SUV will cost when they come out in 2021 - The Verge",
    description:
      "Rivian unveiled the pricing for its forthcoming electric truck and SUV. The R1T pickup truck will cost $75,000, while the R1S SUV will retail for $77,500. The company also unveiled plans for a “hands-free” driver assistance system.",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/SSE_JX2UzT7gjw-V3hgVRszyAOU=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/18276961/rivian_electric_truck_3736.jpg",
    content:
      "The buzzy startup also unveiled plans for hands-free highway driving\r\nPhoto by Sean OKane / The Verge\r\nRivian, the electric vehicle startup based in Michigan and California, revealed this week the pr… [+2227 chars]",
  },
  {
    title:
      "Here’s how much Rivian’s electric truck and SUV will cost when they come out in 2021 - The Verge",
    description:
      "Rivian unveiled the pricing for its forthcoming electric truck and SUV. The R1T pickup truck will cost $75,000, while the R1S SUV will retail for $77,500. The company also unveiled plans for a “hands-free” driver assistance system.",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/SSE_JX2UzT7gjw-V3hgVRszyAOU=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/18276961/rivian_electric_truck_3736.jpg",
    content:
      "The buzzy startup also unveiled plans for hands-free highway driving\r\nPhoto by Sean OKane / The Verge\r\nRivian, the electric vehicle startup based in Michigan and California, revealed this week the pr… [+2227 chars]",
  },
  {
    title:
      "Here’s how much Rivian’s electric truck and SUV will cost when they come out in 2021 - The Verge",
    description:
      "Rivian unveiled the pricing for its forthcoming electric truck and SUV. The R1T pickup truck will cost $75,000, while the R1S SUV will retail for $77,500. The company also unveiled plans for a “hands-free” driver assistance system.",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/SSE_JX2UzT7gjw-V3hgVRszyAOU=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/18276961/rivian_electric_truck_3736.jpg",
    content:
      "The buzzy startup also unveiled plans for hands-free highway driving\r\nPhoto by Sean OKane / The Verge\r\nRivian, the electric vehicle startup based in Michigan and California, revealed this week the pr… [+2227 chars]",
  },
];

export default {
  title: "Carousel",
  component: Carousel,
};

export const Default = () => <Carousel articles={articles} />;

export const MultipleRows = () => <Carousel articles={articles} rows={2} />;

export const BigGap = () => <Carousel articles={articles} gap={30} />;

export const NotInfinite = () => <Carousel articles={articles} loop={false} />;

export const NoContent = () => <Carousel />;
