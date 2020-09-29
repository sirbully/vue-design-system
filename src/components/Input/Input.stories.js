import Input from "./Input.vue";

export default {
  title: "Design System/Input",
  component: Input,
  parameters: {
    notes:
      "You can only input a value either for `startIcon` or `endIcon`. If you try to put values on both, no icon will appear. \n\nPlease refer to the [material icon docs](https://material.io/resources/icons/) to see a list of possible icons."
  },
  argTypes: {
    value: { control: "text" },
    label: { control: "text" },
    placeholder: { control: "text" },
    helperText: { control: "text" },
    size: { control: { type: "inline-radio", options: ["sm", "md"] } },
    color: {
      control: {
        type: "inline-radio",
        options: ["primary", "success", "warning"]
      }
    },
    startIcon: "text",
    endIcon: "text"
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Input },
  template: '<Input v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  placeholder: "Placeholder",
  helperText: "Some interesting text",
  size: "md",
  color: "default",
  multiline: false,
  rows: 4
};
