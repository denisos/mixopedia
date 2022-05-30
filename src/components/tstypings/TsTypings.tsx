
interface TableProps<Type> {
  items: Type[];
  renderItem: (item: Type) => any;
}

export function Table<Type>({items, renderItem}: TableProps<Type>): any {
  console.log("Table items ", items.forEach(console.log));
  const contents = items.map((item: Type) => renderItem(item));
  return contents;
};

export default function TsTypings() {
  
  return (
    <div>
      <p>You can type component interfaces in typescript, like so: </p>
      <p> { "interface Component<T> { items: T[] }" } </p>
      <p>so that typescript will enforce correct usage of that "items" 
        property to only what T supports later
      </p>
      <p>Use generics on your custom Component interfaces when you have a reusable component,
        such as a Table component, which could accept different lists of differently shaped
        data objects. Which is the example I implement here, same table component accepting 
        different data shapes.
      </p>

      <br/>
      <p>Table 1: lists of data with year and sales</p>
      <Table
        items={[{ id: "1", sales: 12345, year: 2022}, 
                { id: "2", sales: 6543, year: 2021}]}
        renderItem={(item) => {
          return <p key={item.id}>year: {item.year} sales: {item.sales}</p>;
        }}
      ></Table>
  
      <br/>
      <p>Table 2: lists of data with id and name</p>
      <Table
        items={[{ id: "11", name:"jane"}, { id: "12", name:"john"}, { id: "13", name:"amy"}]}
        renderItem={(item) => {
          return <p key={item.id}>emp id: {item.id} name {item.name}</p>;
        }} 
      ></Table>
    </div>

  );
}