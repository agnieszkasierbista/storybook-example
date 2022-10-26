import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Input} from "../components/Input/Input.layout";


export default {
    title: 'TextInput',
    component: Input,
    argTypes: {
        backgroundColor: {
            control: 'color',
            table: {
                category: 'Colors',
            },
        },
        borderColor: {
            control: 'color',
            table: {
                category: 'Colors',
            },
        },
        radius: {
            control: {type: 'range', min: 1, max: 25},
            table: {category: 'Shape&Size',},
        },
        inputSize: {
            control: {type: 'radio'},
            table: {category: 'Shape&Size',},

        },
        inputPlaceholder: {
            control: {type: 'text'},
            table: {category: 'Options',},
        },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    radius: 5,
};

export const Secondary = Template.bind({});
Secondary.args = {
    backgroundColor: "white",
};

export const Large = Template.bind({});
Large.args = {
    inputSize: "large",
    inputPlaceholder: "This is a very very very long placeholder for a rather long input field..."
};

export const Small = Template.bind({});
Small.args = {
    inputSize: "small"
};
