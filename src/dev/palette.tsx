import React from 'react';
import { Category, Component, Palette, Variant } from '@react-buddy/ide-toolbox';
import AntdPalette from '@react-buddy/palette-antd';

export const PaletteTree = () => (
  <Palette>
    <Category name="HTML">
      <Component name="a">
        <Variant requiredParams={['href']}>
          <a>Link</a>
        </Variant>
      </Component>
      <Component name="button">
        <Variant>
          <button>Button</button>
        </Variant>
      </Component>
      <Component name="MyComponent">
        <Variant name="1">
          <div>MyComponent</div>
        </Variant>
      </Component>
    </Category>
    <AntdPalette />
  </Palette>
);
