import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { withTheme } from 'emotion-theming';

import { Tag, TagGroup } from '.';
import color from '../utils/color';

export default {
  title: 'Components/Tag',
  decorators: [withKnobs],
};

export const _Tag = () => {
  const onClick = boolean('onClick', false);
  const onDelete = boolean('onDelete', false);
  const children = text('children', 'Published');
  const availableColors = Object.keys(color).reduce(
    (acc, color) => ({ ...acc, [color]: color }),
    {},
  );
  const colorKnob = select('color', availableColors, 'neutral');

  return (
    <TagGroup>
      <Tag
        size={select('size', { sm: 'sm', 'md (default)': null, lg: 'lg' }, null)}
        color={colorKnob}
        onClick={onClick ? () => alert('Tag clicked.') : null}
        hasMenu={boolean('hasMenu', false)}
        onDelete={onDelete ? () => alert('Deleted tag') : null}
      >
        {children}
      </Tag>
    </TagGroup>
  );
};

export const _TagGroup = () => {
  const onClick = boolean('onClick', false);
  const onDelete = boolean('onDelete', false);
  const hasMenu = boolean('hasMenu', false);
  const size = select('size', { sm: 'sm', 'md (default)': null, lg: 'lg' }, null);

  return (
    <TagGroup>
      <Tag
        size={size}
        color="green"
        onClick={onClick ? () => alert('Tag clicked.') : null}
        hasMenu={hasMenu}
        onDelete={onDelete ? () => alert('Deleted tag') : null}
      >
        Apple
      </Tag>
      <Tag
        size={size}
        color="yellow"
        onClick={onClick ? () => alert('Tag clicked.') : null}
        hasMenu={hasMenu}
        onDelete={onDelete ? () => alert('Deleted tag') : null}
      >
        Banana
      </Tag>
      <Tag
        size={size}
        color="orange"
        onClick={onClick ? () => alert('Tag clicked.') : null}
        hasMenu={hasMenu}
        onDelete={onDelete ? () => alert('Deleted tag') : null}
      >
        Orange
      </Tag>
      <Tag
        size={size}
        color="red"
        onClick={onClick ? () => alert('Tag clicked.') : null}
        hasMenu={hasMenu}
        onDelete={onDelete ? () => alert('Deleted tag') : null}
      >
        Cherry
      </Tag>
      <Tag
        size={size}
        color="pink"
        onClick={onClick ? () => alert('Tag clicked.') : null}
        hasMenu={hasMenu}
        onDelete={onDelete ? () => alert('Deleted tag') : null}
      >
        Strawberry
      </Tag>
      <Tag
        size={size}
        color="purple"
        onClick={onClick ? () => alert('Tag clicked.') : null}
        hasMenu={hasMenu}
        onDelete={onDelete ? () => alert('Deleted tag') : null}
      >
        Grape
      </Tag>
      <Tag
        size={size}
        color="blue"
        onClick={onClick ? () => alert('Tag clicked.') : null}
        hasMenu={hasMenu}
        onDelete={onDelete ? () => alert('Deleted tag') : null}
      >
        Blueberry
      </Tag>
    </TagGroup>
  );
};