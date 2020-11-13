import React from 'react';

import Button from '../components/ui/Button';

export default {
  title: 'Button',
  component: Button,
};

export const Default = () => <Button>Primary</Button>;

export const Link = () => (
  <Button link="true" to="/">
    Link
  </Button>
);

export const Active = () => <Button className="active">Active</Button>;
