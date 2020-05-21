import * as React from 'react';
import {
  Text
} from 'spectacle';

export default function SlideText({children, fontSize})
{
  if(!fontSize)
  {fontSize="200%";}
  return (
        <Text lineHeight="1.25" fontSize={fontSize}>
          {children}
        </Text>
      )
}
