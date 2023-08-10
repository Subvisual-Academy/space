const Info = ({ text, icon, alt }) => {
  return (
    <div className="flex-col">
      <div className="text-white text-xl mt-4"> {text} </div>
      <img className="h-8 w-8" src={icon} alt={alt} />
    </div>
  );
};

export default Info;
