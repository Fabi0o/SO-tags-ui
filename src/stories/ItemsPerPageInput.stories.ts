import { Meta, StoryObj } from "@storybook/react";
import ItemsPerPageInput from "../components/ItemsPerPageInput";

const meta = {
  title: "Components/ItemsPerPageInput",
  component: ItemsPerPageInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ItemsPerPageInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {};
