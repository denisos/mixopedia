interface SchemaRow {
  name: string;
  required: boolean;
  type: string;
}

interface validateResponse {
  ok: boolean;
  message: string;
}

function makeSchemaMap(schema: SchemaRow[]) {
  return schema.reduce((acc: any, item: SchemaRow) => {
    acc[item.name] = item;
    return acc;
  }, {});
}
  
function isValidEmployee(emp:any, schema: SchemaRow[]) {
  const schemaMap = makeSchemaMap(schema);

  // check keys on the employee are correct type
  for (const [key, value] of Object.entries(emp)) {

    // property in object not allowed
    const schemaValue = schemaMap[key];
    if (!schemaValue) {
       return {"ok": false, "message": `unexpected property ${key}`}
    }

    // property has wrong type
    if (schemaValue.type.startsWith('array')) {
      if (!Array.isArray(value)) {
        return {"ok": false, "message": `type ${schemaValue.type} expected for ${key}`}
      }
    } else if (typeof value !== schemaValue.type) {
      return {"ok": false, "message": `type ${schemaValue.type} expected for ${key}`}
    }
  }

  // check for any missing required fields
  for (const [key, value] of Object.entries(schemaMap)) {
    const typedValue: SchemaRow = value as SchemaRow;
    if (typedValue.required && !emp[key]) {
      return {"ok": false, "message": `${key} is required`}
    }
  }

  return { "ok": true, "message": "success" };
}



export function validate(org: any, schema: SchemaRow[]): validateResponse {
  const hasReports = (org: any) => org && org[0].reports && org[0].reports.length > 0;
  const hasSubordinates = (org: any) => org && org[0].subordinates && org[0].subordinates.length > 0;

  let res = null;

  const emp = org[0];
  console.log(emp.name);

  res = isValidEmployee(emp, schema);
  if (!res.ok) return res;

  if (hasReports(org)) {
    res = validate(emp.reports, schema)
  }

  if (res.ok && hasSubordinates(org)) {
    res = validate(emp.subordinates, schema)
  }

  return res;
}
