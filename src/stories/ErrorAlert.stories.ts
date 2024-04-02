import { Meta, StoryObj } from "@storybook/react";
import ErrorAlert from "../components/ErrorAlert";

const meta = {
  title: "Components/ErrorAlert",
  component: ErrorAlert,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ErrorAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    msg: "",
  },
};

export const WithMessage: Story = {
  args: {
    msg: "Oops, something went wrong!",
  },
};
