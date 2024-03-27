import { Tag } from "../../types/Response";

type Props = {
  tags: Tag[] | undefined;
};

function Table({ tags }: Props) {
  return (
    <>
      {tags!.map((tag) => (
        <div key={tag.name}>{tag.name}</div>
      ))}
    </>
  );
}

export default Table;
