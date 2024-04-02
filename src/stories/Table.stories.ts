import { Meta, StoryObj } from "@storybook/react";
import Table from "../components/Table";
import tags from "./assets/dummyTagData";

const meta = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithDummyData: Story = {
  args: { tags },
};
