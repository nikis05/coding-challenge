// My answer
// items.map((item, index) => <Item key={index => This section is incorrect and can sometimes cause problems. (For example, when deleting or adding a product) we must use an item.id.} item={item} />);

interface Props {
  items: Item[];
}

interface Item {
  id: string;
  title: string;
  description: string;
}


const Component: FC<Props> = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
}