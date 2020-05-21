import * as React from 'react';
import {
  Grid,
  Heading,
  Box
} from 'spectacle';

export default function TwoColumnLayout({heading, leftContent, rightContent}) {
  return (
    <>
      <Heading>{heading}</Heading>
      <Grid gridTemplateColumns="1fr 8fr 8fr 8fr">
        <Box/>
        <Box>
          {leftContent}
        </Box>
        <Box>
          {rightContent}
        </Box>
      </Grid>
    </>
  )
}
