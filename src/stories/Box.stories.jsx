import Box from "./Box";

export default {
  title: "Component/Box",
  component: Box,
  argTypes: {
    label: {
      options: ["1", "2", "3"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Box {...args} />;

export const largeBox = Template.bind({});

largeBox.args = {
  label: "Large Box",
};

export const mediumBox = Template.bind({});

mediumBox.args = {
  label: "Medium Box",
};
