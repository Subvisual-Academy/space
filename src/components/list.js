const List = ({ items }) => {
  return (
    <div className="mt-6 flex space-x-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-lilac text-white text-base inline-block py-2 px-4 mt-4 border-2 border-white rounded-[20px]"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default List;
