import { ActionBlock, ContentBlock } from "./types";

interface BlockProps {
  block: ActionBlock | ContentBlock;
}

export default function Block({ block }: BlockProps) {
  const id = ('id' in block) ? block.id : '';
  const visits = ('visits' in block) ? block?.visits : undefined;
  return (
    <div id={id}>
      <div>{block.content && block.content}
      {visits && <span> {visits > 0 && visits}</span>}
      </div>

    </div>
  );
}
