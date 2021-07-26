import * as React from "react";
import { Header } from "./header";

export default {
  component: Header,
  title: "Components/Header"
};

const Template = (args: any) => <Header {...args} />;

export const Default = Template.bind({});

