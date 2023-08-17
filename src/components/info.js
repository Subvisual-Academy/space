const Info = ({ text, icon, alt }) => {
  return (
    <div className="flex items-center mt-3">
      <img className="h-8 w-8 rounded-full mr-3" src={icon} alt={alt} />
      <div className="text-white text-xl"> {text} </div>
    </div>
  );
};

export default Info;
