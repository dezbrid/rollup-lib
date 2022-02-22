import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SayHello from "./index";

export default {
  title: "Rollup-Lib/SayHello",
  component: SayHello,
} as ComponentMeta<typeof SayHello>;

const Template: ComponentStory<typeof SayHello> = (args) => (
  <SayHello {...args} />
);
export const Daniel = Template.bind({});
Daniel.args = {
  name: 'daniel'
};
