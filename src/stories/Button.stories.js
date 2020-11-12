import React from "react";

import Button from "../components/Button";

export default {
    title: "Button",
    component: Button,
};

export const Link = () => (
    <Button link="true" to="/">
        Link
    </Button>
);
