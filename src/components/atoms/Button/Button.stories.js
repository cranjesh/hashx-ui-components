import React from 'react';
import { action } from '@storybook/addon-actions'
import Button from './Button'

export default {
  title: 'Button',
  component: Button,
};

export const SimpleButton = () => <Button onClick={action('clicked')}>Simple Button</Button>;