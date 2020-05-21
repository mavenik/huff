import * as React from 'react';
import {
  Grid,
  Heading,
  Box
} from 'spectacle';

export default function SingleColumnLayout({heading, slideContent}) {
  return (
    <>
      <Heading>{heading}</Heading>
      <Grid gridTemplateColumns="1fr 16fr 8fr">
        <Box/>
        <Box>
          {slideContent}
        </Box>
      </Grid>
    </>
  )
}
