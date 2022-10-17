import React from 'react';
import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox';

import { PaletteTree } from './palette';
import { App } from '../App';
import { UpButton } from '../components/ui/UpButton/UpButton';
import { Help } from '../components/screens/Help/Help';

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/App">
        <App />
      </ComponentPreview>
      <ComponentPreview path="/UpButton">
        <UpButton />
      </ComponentPreview>
      <ComponentPreview path="/Help">
        <Help />
      </ComponentPreview>
    </Previews>
  );
};

// eslint-disable-next-line import/no-default-export
export default ComponentPreviews;
