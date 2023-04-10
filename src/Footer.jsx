const Footer = ({ dispatch, lists, allLists, setAllLists }) => {
  return (
    <div className="flex justify-center items-center dark:bg-dark__desaturatedBlue bg-light__lightGray shadow-lg rounded-md p-3 md:p-5">
      <span
        className="text-lg dark:text-dark__darkGrayishBlue text-light__daryGrayishBlue font-bold px-4 cursor-pointer dark:hover:text-slate-50 hover:text-zinc-900"
        onClick={() => {
          dispatch({ type: "show-all", list: allLists });
        }}
      >
        All
      </span>
      <span
        className="text-lg dark:text-dark__darkGrayishBlue text-light__daryGrayishBlue font-bold px-4 cursor-pointer dark:hover:text-slate-50 hover:text-zinc-900"
        onClick={() => {
          setAllLists(lists);
          dispatch({ type: "show-active" });
        }}
      >
        Active
      </span>
      <span
        className="text-lg dark:text-dark__darkGrayishBlue text-light__daryGrayishBlue font-bold px-4 cursor-pointer dark:hover:text-slate-50 hover:text-zinc-900"
        onClick={() => {
          setAllLists(lists);
          dispatch({ type: "show-completed" });
        }}
      >
        Completed
      </span>
    </div>
  );
};

export default Footer;
