
import PropsViewer from './PropsViewer';
import blockDeeplyNested from './blockDeeplyNested.json'
import blockNested from './blockNested.json'

import './PropsViewer.css';

const block = {
  id: "8947b61f-4386-4ead-ab52-00200a446140",
  title: "Hello, world!",
  version: 4.0,
  public: true,
};


export default function PropsViewerPage() {

  return (
    <main>
      <pre>
        <p>◀ ▼ ▲ ▶</p>

        <div>
          <h3>deeply nested</h3>
          <PropsViewer obj={blockDeeplyNested} />
        </div>

        <div>
          <h3>flat block</h3>
          <PropsViewer obj={block} />
        </div>
        
        <div>
          <h3>nested 1 level</h3>
          <PropsViewer obj={blockNested} />
        </div>
      </pre>
    </main>
  );
}