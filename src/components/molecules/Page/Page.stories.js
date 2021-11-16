import React from 'react';
import { action } from '@storybook/addon-actions'
import Page from './Page'

export default {
  title: 'Page',
  component: Page,
};

export const SimplePage = () => <Page onSubmitClick={action('clicked')}>Simple Button</Page>;