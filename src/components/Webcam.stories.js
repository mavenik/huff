import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Webcam from './Webcam';

storiesOf('Webcam', module)
  .add('default', () => <Webcam />);
