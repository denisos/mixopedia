
export type BlockBase = {
  type: BlockType
}

export type ContentBlock = {
  content: string;
  type: 'page-title'
}

export type ActionBlock = {
  id: string;
  content?: string;
  type: | 'block-create' | 'block-update' 
  | 'presence-enter' | 'presence-visit';
  visits?: number;
  blockId?: string;
}

export type BlockType = ActionBlock['type'] | ContentBlock['type'];
