import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  Deck,
  Slide,
  Heading,
  Grid,
  FlexBox,
  Box,
  FullScreen,
  Markdown,
  Progress,
  UnorderedList,
  ListItem,
  Text
} from 'spectacle';
import Webcam from './Webcam';
import TwoColumnLayout from './TwoColumnLayout';
import SingleColumnLayout from './SingleColumnLayout';
import SlideText from './SlideText';

import './App.css';

if(module.hot) {module.hot.accept();}

const template = () => (
  <>
    <FlexBox
      justifyContent="space-between"
      position="absolute"
      right={0}
      top={0}
      width={1}
    >
      <Box/>
      <Box padding="10em">
        <Webcam />
      </Box>
    </FlexBox>
    <FlexBox
      justifyContent="space-between"
      position="absolute"
      bottom={0}
      width={1}
    >
      <Box padding="0 1em">
        <FullScreen />
      </Box>
      <Box padding="1em">
        <Progress />
      </Box>
    </FlexBox>
  </>
);

function App(){

  const theme = {
    colors: {
      primary: 'white',
      secondary: 'lightgrey',
      tertiary: 'black'
    }
  };

  return (
    <>
      <Deck theme={theme} template={template} transitionEffect="fade">
        <Slide>
          <Heading>Sample Title</Heading>
        </Slide>
      </Deck>
    </>
  )
}
ReactDOM.render(<App/>, document.getElementById('root'));
