
import { Block, PagePropertiesType } from './types';
import './Link.css';
// style="width: 50%; height: 50%; display: block; fill: inherit; flex-shrink: 0; backface-visibility: hidden; position: absolute; right: 0px; bottom: 0px;"

interface LinkProps {
  block: Block;
}


export default function Link( { block } : LinkProps) {
  const { id, properties } = block ;
  const { title, href } = properties as PagePropertiesType;
  console.log(block, title);
  return (
    <div className="link-type">
      <div>

      </div>
      <a href={href} className="link-type-link">
        <div>
          <div className="link-type-link-icons">
            <span>🏡</span>
            <svg viewBox="0 0 13 13" className="pageLinkIndicator" ><path d="M6.30826 4.43292L1.76184 8.98454C1.76176 8.98462 1.76169 8.9847 1.76161 8.98477C1.76158 8.9848 1.76156 8.98482 1.76154 8.98484C1.46068 9.28584 1.25 9.6914 1.25 10.1565C1.25 10.6117 1.45865 11.0119 1.73417 11.2886C2.01014 11.5658 2.41107 11.7773 2.87078 11.7773C3.34169 11.7773 3.73758 11.5617 4.03477 11.2733L4.03482 11.2734L4.04244 11.2657L8.58864 6.72474V8.667C8.58864 9.51956 9.22729 10.2935 10.1521 10.2935C11.0528 10.2935 11.75 9.54534 11.75 8.66127V2.92671C11.75 2.48722 11.5981 2.06381 11.2838 1.74808C10.9689 1.43182 10.5446 1.27728 10.1006 1.27728H4.36028C3.46161 1.27728 2.72804 1.97749 2.72804 2.86942C2.72804 3.79734 3.51104 4.43292 4.35455 4.43292H6.30826Z" fill="#3E3C38" stroke="white" strokeWidth="1.5"></path></svg>
          </div>
          <span className="link-type-title">
            {title}
          </span>
        </div>
      </a>
    </div>
  );
}
