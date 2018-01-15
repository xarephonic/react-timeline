import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Article from '../src/Article.js';
import ArticleSoloHolder from '../src/ArticleSoloHolder.js';

storiesOf('Article', module)
  .add('default', () => (
    <Article id={0} title={'this is a test title'} text={'lorem ipsum hede hödö lilililililili'} />
  ));