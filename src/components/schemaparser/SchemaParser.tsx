import { useCallback, useState } from "react";

import Button from "../button/Button";
import Toast from '../toast/Toast';
import { validate } from '../../utils/utils';

import './SchemaParser.css';

const exampleSchema = [
  {name: 'name', required: true, type: 'string'},
  {name: 'title', required: true, type: 'string'},
  {name: 'salary', required: true, type: 'number'},
  {name: 'remote', required: false, type: 'boolean'},
  {name: 'reports', required: false, type: 'array:employee'},
  {name: 'subordinates', required: false, type: 'array:employee'},
];

const exampleData = [
  {
    "name": "alice",
    "title": "ceo",
    "salary": 100,
    "reports": [{
        "name": "bob",
        "title": "cfo",
        "salary": 10,
        "reports": [{
          "name": "zorp",
          "title": "controller",
          "salary": 40,
          "reports": [{
            "name": "denis",
            "title": "manager",
            "salary": 25,
            "remote": false,
            "subordinates": [{
              "name": "subord lar",
              "title": "ruffian",
              "salary": 33,
              "reports": [{
                "name": "sub-sub denis",
                "title": "sub sub",
                "salary": 25,
              }]
            }]
          }]
        }],
    }],
  }
];
export default function SchemParser() {
  const [ jsonData, setJsonData ] = useState(exampleData);
  const [ schemaData, setSchemaData ] = useState(exampleSchema);
  const [ outcome, setOutcome ] = useState(0);
  const [ validateMessage, setValidateMessage ] = useState('');

  const handleSchemaChange = useCallback((event) => {
    const schemaData = event.target.value;
    setSchemaData(JSON.parse(schemaData));
  }, []);

  const handleDataChange = useCallback((event) => {
    const jsonData = event.target.value;
    setJsonData(JSON.parse(jsonData))
  }, []);

  const handleSchemaValidate = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setOutcome(0);
    console.log("validate ", jsonData, schemaData);
    event.preventDefault();  // will convert to form shortly

    const res = validate(jsonData, schemaData);
    setValidateMessage(res.message);
    setOutcome((res.ok ? 1 : 2))
  };
  
  return (
    <div className="schema-parser">
      <h2>Schema Parser</h2>
      <p>Schema Parser validates a json data input against a specific schema. 
        Try for yourself by editing and then hit Validate button.</p>

      <div className="toast-container">
        {(outcome > 0) && <Toast message={validateMessage} type={outcome === 2 ? 'error' : 'success'} />}
      </div>

      <div className="schema-data-containers">
        <div className="text-area-container">
          <label>json data to be validated</label>
          <textarea className="json-data" 
            id="json-data" 
            name="json-data" 
            value={JSON.stringify(jsonData, undefined, 2)} 
            onChange={handleDataChange} />
        </div>

        <div className="text-area-container">
          <label>schema to use to validate</label>
          <textarea className="schema-data" 
            id="schema-data" 
            name="schema-data" 
            value={JSON.stringify(schemaData, undefined, 2)}
            onChange={handleSchemaChange} />
        </div>
      </div>

      <Button type="button" onClick={handleSchemaValidate}>Validate</Button>
    </div>
  );
}
