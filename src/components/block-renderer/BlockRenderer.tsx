
import { BlockList } from 'net';
import { useEffect, useReducer } from 'react';
import Block from './Block';
import { ActionBlock, ContentBlock } from "./types";

const PAUSE = "pause";

const events = [
  // PAGE TITLE
  { type: "page-title", content: "Notion Interview 👋" },
  PAUSE,

  // CREATE + UPDATE
  { type: "block-create", id: "02e5e471-711a-4787-8e72-d652e1176a10" },
  {
    type: "block-update",
    id: "02e5e471-711a-4787-8e72-d652e1176a10",
    content: `Everything in Notion is a "block"`,
  },
  PAUSE,
  { type: "block-create", id: "1029d078-8515-4c96-a766-51dc3555a7f1" },
  {
    type: "block-update",
    id: "1029d078-8515-4c96-a766-51dc3555a7f1",
    content: `Blocks span the width of the page and contain "content"`,
  },
  PAUSE,
  { type: "block-create", id: "d4067f90-6a98-4836-95cb-16b9c39d3b99" },
  {
    type: "block-update",
    id: "d4067f90-6a98-4836-95cb-16b9c39d3b99",
    content: `Blocks can be udpated`,
  },
  PAUSE,
  {
    type: "block-update",
    id: "d4067f90-6a98-4836-95cb-16b9c39d3b99",
    content: `Blocks can be updated`,
  },
  PAUSE,
  {
    type: "block-update",
    id: "d4067f90-6a98-4836-95cb-16b9c39d3b99",
    content: `Blocks can be updated... fixed!`,
  },
  PAUSE,

  // PRESENCE
  { type: "block-create", id: "11e55c12-6525-4b27-aa23-08bcddec9d05" },
  {
    type: "block-update",
    id: "11e55c12-6525-4b27-aa23-08bcddec9d05",
    content: `Blocks can also be visited`,
  },
  PAUSE,
  {
    type: "presence-enter",
    id: "b9e520d9-6d1b-4e3d-af0a-9001645e599d",
    name: "👀",
  },
  PAUSE,
  PAUSE,
  {
    type: "presence-visit",
    id: "b9e520d9-6d1b-4e3d-af0a-9001645e599d",
    blockId: "11e55c12-6525-4b27-aa23-08bcddec9d05",
  },
  PAUSE,
  {
    type: "presence-visit",
    id: "b9e520d9-6d1b-4e3d-af0a-9001645e599d",
    blockId: "02e5e471-711a-4787-8e72-d652e1176a10",
  },
  PAUSE,
  {
    type: "presence-visit",
    id: "b9e520d9-6d1b-4e3d-af0a-9001645e599d",
    blockId: "1029d078-8515-4c96-a766-51dc3555a7f1",
  },
  {
    type: "presence-enter",
    id: "e647ef28-f709-4df7-adbc-c709ca3ebee6",
    name: "🧱",
  },
  PAUSE,

  { type: "block-create", id: "480ed352-e579-4e16-b427-2141efb0785c" },
  {
    type: "block-update",
    id: "480ed352-e579-4e16-b427-2141efb0785c",
    content: `This doc's getting pretty popular...`,
  },
  PAUSE,
  {
    type: "presence-enter",
    id: "4f75f3da-e4ff-4a73-b946-50a8664a4222",
    name: "J",
  },
  {
    type: "presence-visit",
    id: "b9e520d9-6d1b-4e3d-af0a-9001645e599d",
    blockId: "480ed352-e579-4e16-b427-2141efb0785c",
  },
  {
    type: "presence-visit",
    id: "e647ef28-f709-4df7-adbc-c709ca3ebee6",
    blockId: "480ed352-e579-4e16-b427-2141efb0785c",
  },
  PAUSE,

  {
    type: "presence-visit",
    id: "4f75f3da-e4ff-4a73-b946-50a8664a4222",
    blockId: "480ed352-e579-4e16-b427-2141efb0785c",
  },
];

const DELAY_MS = 2000;

window.Socket = {};
window.Socket.listen = (callback) => {
  let idx = 0;

  function iter() {
    if (idx >= events.length) {
      return;
    }

    if (events[idx] === PAUSE) {
      idx++;
      setTimeout(iter, DELAY_MS);
    } else {
      callback(events[idx]);
      idx++;
      iter();
    }
  }

  iter();
};

//window.Socket.listen((event) => console.log(event))

interface BlockRendererState {
  title: string;
  blocks: ActionBlock[];
}

const initialState: BlockRendererState = {
  title: '',
  blocks: []
}

type ACTIONTYPE = ActionBlock | ContentBlock;

// if (action.type === 'presence-visit') {
//   return {
//     ...block,
//     visits: (block.visits !== undefined) ? block.visits++ : 0
//   }
// } 
// just an update so replace

function updateBlocks(blocks: ActionBlock[], action: ActionBlock) {
  const newBlocks = blocks.map((block) => {
    if (block.id === action.id) {
      return action;
    } else {
      return block;
    }
  });

  console.log("newBlocks ", newBlocks)
  return newBlocks;
}

function reducer(state: typeof initialState, action: ACTIONTYPE): BlockRendererState {
  console.log('reducer', action)

  switch (action.type) {
    case 'page-title':
      return {
        ...state,
        title: action.content
      }
    case 'block-create': 
      return {
        ...state,
        blocks: [...state.blocks].concat([action])
      }
    case 'block-update':
      return {
        ...state,
        blocks: state.blocks.map((block: ActionBlock) => (block.id === action.id) ? action : block)
      }
    case 'presence-visit':
      return {
        ...state,
        blocks: state.blocks.map((block: ActionBlock) => 
          (block.id !== action.blockId) ? block : {
            ...block,
            visits: (block.visits !== undefined) ? block.visits++ : 0
          })
      }
  }
  return state;
}

export default function BlockRenderer() {
  const [ {title, blocks}, dispatch ] = useReducer(reducer, initialState);

  useEffect(() => {
    if (window.Socket?.listen) {
      window.Socket?.listen((event: any) => {
        console.log(event);
        dispatch(event)
      });
    }
  }, [])

  return (
    <div className="block-container">
      <h1>{title}</h1>

      {blocks.map((block) => <Block key={block.id} block={block} />)}
    </div>

  );
}
