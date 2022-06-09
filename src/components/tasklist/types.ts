
export interface Task {
  title: string;
  id: string;
  state: string;
  created: string;
  started?: string;
  completed?: string;
}

export type BlockType = 'to_do' | 'page' | 'sub_sub_header';

export type BlockId = string;

export type PropertiesType = {
  title: string[][];
}

export type PagePropertiesType = PropertiesType & {
  href: string;
}

export type ToDoPropertiesType = PropertiesType & {
  checked: boolean;
}

export type SubHeaderPropertiesType = PropertiesType;

export interface Block {
  id: BlockId;
  type: BlockType;
  version: number;
  properties: PagePropertiesType | ToDoPropertiesType | SubHeaderPropertiesType;
  content: BlockId[];
  parent: BlockId;
}

// how to define the typescript to limit properties keys based on the type?


// const newB: Block = {
//   id: "123",
//   type: "sub_sub_header",
//   version: 1,
//   properties: {
//     title: [["atitle"]],
//     href: "test"
//   },
//   content: [],
//   parent: "101"
// }