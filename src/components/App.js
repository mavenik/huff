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

import dnsResolution from '../assets/DNS_Resolution.jpg';
import costChat1 from '../assets/cost_chat_1.png';
import costChat2 from '../assets/cost_chat_2.png';
import dancingPigs from '../assets/dancing_pigs.png';

import './App.css';

if(module.hot) {module.hot.accept();}

const template = () => (
  <>
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
          <FlexBox height="100%" flexDirection="column">
            <Box><Heading>How to self-host</Heading></Box>
            <Box><Heading>a secure private</Heading></Box>
            <Box><Heading>video conferencing system</Heading></Box>
          </FlexBox>
          <Text fontSize="200%">Nikhil Lanjewar | @rhetonik</Text>
        </Slide>
        
          <Slide>
          <FlexBox height="100%" flexDirection="column">
            <Box><Heading>What</Heading></Box>
            <Box><Heading>to</Heading></Box>
            <Box><Heading>expect?</Heading></Box>
          </FlexBox>
        </Slide>
        <Slide>
          <TwoColumnLayout
            heading="About me"
            leftContent={
              <img src="https://scontent.fpnq7-1.fna.fbcdn.net/v/t1.0-9/45010842_10161267470660195_2712832825987432448_n.jpg?_nc_cat=104&_nc_sid=7aed08&_nc_ohc=lU0Vjpj6yjEAX-nNJqQ&_nc_ht=scontent.fpnq7-1.fna&oh=bb5f66856372f138f969727f4c9132a4&oe=5EEC3570" width={500}/>
            }
            rightContent={
                <SlideText>
                  Full-stack Engineer
                  <br/>Independent Consultant
                  <br/>CTO Coach
                  <br/>Conservationist
                  <br/><br/>
                  <br/>Father
                  <br/>Backpacker
                  <br/>Mouth Harpist
                  <br/>Amateur Astronomer
                  <br/>Non-competing triathlete
                </SlideText>}
          />
        </Slide>

        <Slide>
          <FlexBox height="100%" flexDirection="column">
            <Box><Heading>Hosted software</Heading></Box>
            <Box><Heading>vs</Heading></Box>
            <Box><Heading>Self-hosted software</Heading></Box>
          </FlexBox>
        </Slide>

        <Slide>
          <FlexBox height="100%" flexDirection="column">
            <Box><Heading>Why should you care?</Heading></Box>
          </FlexBox>
        </Slide>

        <Slide>
          <FlexBox height="100%" flexDirection="column">
            <Box><Heading>FOSS</Heading></Box>
            <Box><Heading>Free as in freedom</Heading></Box>
          </FlexBox>
        </Slide>

        <Slide>
          <FlexBox height="100%" flexDirection="column">
            <Box><Heading>Basic requirements</Heading></Box>
            <Box><Heading>for self-hosting</Heading></Box>
          </FlexBox>
        </Slide>

        <Slide>
          <SingleColumnLayout
            heading="Basic infrastructure"
            slideContent={
              <img src={dnsResolution} width={700} />
            }
          />
        </Slide>

        <Slide>
          <TwoColumnLayout
            heading="Basic infrastructure"
            leftContent={
              <img src={dnsResolution} width={700} />
            }
            rightContent={
              <SlideText>
                1. Domain Name<br/>
                2. DNS Server<br/> 
                3. Hosting Server<br/> 
                4. Web Site/app
              </SlideText>
            }
          />
        </Slide>

        <Slide>
          <SingleColumnLayout
            heading="Manual setup"
            slideContent={
              <SlideText>
                1. Register Domain name<br/>
                2. Configure DNS<br/>
                3. Start hosting server<br/>
                4. Deploy website/app
              </SlideText>
            }
          />
        </Slide>

        <Slide>
          <SingleColumnLayout
            heading="Infrastructure as code"
            slideContent={
              <SlideText>
                1. Register Domain name<br/>
                2. Configure DNS &#9881;<br/>
                3. Start hosting server &#9881;<br/>
                4. Deploy website/app &#9881;
              </SlideText>
            }
          />
        </Slide>

        <Slide>
          <SingleColumnLayout
            heading="Private video-conferencing"
            slideContent={
              <SlideText>
                1. Register Domain name - name.com/GoDaddy/BigRock/etc<br/>
                2. Configure DNS - Amazon AWS Route53<br/>
                3. Start hosting server - Amazon EC2<br/>
                4. Deploy website/app - Jitsi Meet<br/>
                5. Infrastructure as code - Terraform
              </SlideText>
            }
          />
        </Slide>

        <Slide>
          <Heading>No-code setup</Heading>
          <FlexBox height="70%" flexDirection="column">
            <Box><Heading>Amazon AWS</Heading></Box>
            <Box><Heading>Jitsi Meet</Heading></Box>
            <Box><Heading>Terraform Cloud</Heading></Box>
          </FlexBox>
        </Slide>

        <Slide>
          <FlexBox height="100%" flexDirection="column">
            <Box><Heading>Gotchas</Heading></Box>
          </FlexBox>
        </Slide>

        <Slide>
          <Heading>Gotchas</Heading>
          <FlexBox height="70%" flexDirection="column">
            <Box><Heading>Number of</Heading></Box>
            <Box><Heading>participants</Heading></Box>
          </FlexBox>
        </Slide>

        <Slide>
          <Heading>Gotchas</Heading>
          <FlexBox height="70%" flexDirection="column">
            <Box><Heading>Server network speed</Heading></Box>
          </FlexBox>
        </Slide>

        <Slide>
          <TwoColumnLayout
            heading="Gotchas - Cost"
            leftContent={
              <img src={costChat1} width={600}/>
            }
            rightContent={
              <img src={costChat2} width={600}/>
            }
          />
        </Slide>
        
        <Slide>
          <SingleColumnLayout 
            heading="Gotchas"
            slideContent={
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Punch_%281841%29_%2814780519394%29.jpg" width={850}/>
            }
          />
        </Slide>

        <Slide>
          <SingleColumnLayout
            heading="Gotchas"
            slideContent={
              <img src={dancingPigs} width={950} />
            }
          />
        </Slide>

        <Slide>
          <FlexBox height="100%" flexDirection="column">
            <Box><Heading>What's under the hood</Heading></Box>
          </FlexBox>
        </Slide>

        <Slide>
          <FlexBox height="100%" flexDirection="column">
            <Box><Heading>Possible enhancements</Heading></Box>
          </FlexBox>
        </Slide>

        <Slide>
          <FlexBox height="100%" flexDirection="column">
            <Box><Heading>Enterprise scalability</Heading></Box>
          </FlexBox>
        </Slide>

        <Slide>
          <FlexBox height="100%" flexDirection="column">
            <Box><Heading>QnA</Heading></Box>
          </FlexBox>
        </Slide>

        <Slide>
          <FlexBox height="100%" flexDirection="column">
            <Box><Heading>Thank you!</Heading></Box>
          </FlexBox>
        </Slide>
      </Deck>
    </>
  )
}
ReactDOM.render(<App/>, document.getElementById('root'));
