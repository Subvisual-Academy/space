const List = ({ things }) => {
  return (
    <div className="mt-6 flex space-x-4">
      {things.map((thing, index) => (
        <div key={index}>
          <div className="bg-lilac text-white text-base inline-block py-2 px-4 mt-4 border-2 border-white rounded-[20px]">
            {thing}
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
