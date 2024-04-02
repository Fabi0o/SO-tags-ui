import { Meta, StoryObj } from "@storybook/react";
import Loader from "../components/Loader";

const meta = {
  title: "Components/Loader",
  component: Loader,
  tags: ["autodocs"],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {};
