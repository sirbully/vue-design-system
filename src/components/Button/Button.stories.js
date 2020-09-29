import Button from "./Button.vue";

export default {
  title: "Design System/Button",
  component: Button,
  parameters: {
    notes:
      "You can only input a value for `startIcon` or `endIcon`. If you try to put values on both, no icon will appear. \n\nPlease refer to the [material icon docs](https://material.io/resources/icons/) to see a list of possible icons."
  },
  argTypes: {
    value: { control: "text" },
    size: { control: { type: "inline-radio", options: ["sm", "md", "lg"] } },
    color: {
      control: {
        type: "inline-radio",
        options: ["default", "primary", "secondary", "danger"]
      }
    },
    variant: {
      control: {
        type: "inline-radio",
        options: ["default", "outline", "text"]
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<Button v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = {
  value: "Default",
  size: "md",
  color: "default"
};
