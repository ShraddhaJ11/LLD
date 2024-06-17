const AccordionItem = ({ title, body, isOpen, setIsOpen }) => {
    return (
      <div className="m-3 border border-black">
        <div
          className="p-2 font-bold bg-gray-200 text-left flex justify-between cursor-pointer"
          onClick={() => setIsOpen()}
        >
          <span>{title}</span>
          <span>&#8595;</span>
        </div>
        {isOpen && <div className="p-2 text-left">{body}</div>}
      </div>
    );
  };
  
  export default AccordionItem;
  