import Box from "./Box";

export default {
  title: "Component/Box",
  component: Box,
  argTypes: {
    label: {
      options: ["選項1", "選項2", "選項3"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Box {...args} />;

export const largeBox = Template.bind({});

largeBox.args = {
  label: "Large Box",
  size: "lg",
};

export const mediumBox = Template.bind({});

mediumBox.args = {
  label: "Medium Box",
  size: "md",
};

export const smallBox = Template.bind({});

smallBox.args = {
  label: "Small Box",
  size: "sm",
};
