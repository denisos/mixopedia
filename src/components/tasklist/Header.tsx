import { Block } from './types';

interface HeaderProps {
  block: Block;
}

export default function HeaderType({ block }: HeaderProps) {
  const { id, properties: { title } } = block ;

  return (
    <h3>{title}</h3>
  );
}