const List = ({ things }) => {
  return (
    <div className="mt-6 space-x-4">
      {things.map((thing) => (
        <div
          key={thing}
          className="bg-lilac text-white text-base inline-block py-2 px-4 mt-4 border-2 border-white rounded-[20px]"
        >
          {thing}
        </div>
      ))}
    </div>
  );
};

export default List;
