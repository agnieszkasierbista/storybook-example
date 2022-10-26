import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Header} from "../components/Header/Header.layout";


export default {
  title: 'Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  }
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'John Hancock',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
