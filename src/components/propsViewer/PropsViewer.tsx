import { useEffect, useState } from 'react';

import './PropsViewer.css';

type Property = {
  key: string | number; 
  value: any;
}

const isObject = (obj: any) => obj === Object(obj);

function buildValues(obj: any) {
  let tmpProps = [];
  for (const prop in obj) {
    let theValue = obj[prop];
    if (typeof theValue == "boolean") {
      theValue = theValue ? "true" :  "false";
    }
    tmpProps.push({ key: prop, value: theValue });
  }

  return tmpProps;
}

export default function PropsViewer({ obj }: any): JSX.Element {
  const [isOpen, setIsOpen ] = useState(false);
  const [ objValues, setObjValues ] =  useState<Property[]>([]);

  useEffect(() => {
    setObjValues(buildValues(obj));
  }, [obj]);

  const handleToggleView = () => {
    setIsOpen(!isOpen);
  }


  return (
    <span>
      <span onClick={handleToggleView} className="open-close-button margin-left">
        {!isOpen ? '▶' : '▼'}
      </span>
      <span className="margin-left">{'{'}</span>

      {!isOpen && <span>...</span>}

      {isOpen &&
        <ul className="props-list">
          {objValues.map((value, idx) => {
            if (isObject(value.value)) {
              return (
                <li key={idx}>{value.key}:
                  <PropsViewer obj={value.value} />
                </li>
              )
            } else {
              return <li key={idx}>{value.key}: {value.value}</li> 
            }
          })}
        </ul>
      }

      {'}'}
    </span>
  )


  // return (
  //   <span>
  //     <span onClick={handleToggleView}>▼ {'{'}</span>
  //     <ul style={{listStyle: "none"}}>
  //       {objValues.map((value, idx) => {
  //         if (isObject(value.value)) {
  //           return (
  //             <li key={idx}>{value.key}:
  //               <PropsViewer obj={value.value} />
  //             </li>
  //           )
  //         } else {
  //           return <li key={idx}>{value.key}: {value.value}</li> 
  //         }
  //       })}
  //     </ul>
  //   {'}'}
  //   </span>
  // );
}