import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProfileCard, { IProfileCard } from './ProfileCard';
import { profileCardProps } from './ProfileCard.mocks';

export default {
  title: 'cards/ProfileCard',
  component: ProfileCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ProfileCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

export const card = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

card.args = {
  ...profileCardProps.base,
} as IProfileCard;