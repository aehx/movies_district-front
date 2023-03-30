import { PropsPageList } from "../../../../typescript/interface/props.interface";

export default function PageManager(props: PropsPageList) {
  const incrementPage = (page: number) => {
    props.changePage(++page);
  };
  const decrementPage = (page: number) => {
    if (page <= 1) {
      return;
    }
    props.changePage(--page);
  };
  return (
    <div className="w-2/3 mt-10 [&>*]:mx-1 m-auto flex justify-center">
      <button
        className="bg-red-600 rounded-sm py-0.5 sm:px-3 hover:bg-red-700 transition duration-500 text-lg"
        onClick={() => decrementPage(props.page)}
      >
        Prev
      </button>
      <span className="text-lg bg-zinc-600 rounded-sm py-0.5 px-3">
        <span className="text-red-500">{props.page}</span> /{" "}
        <span>{props.maxPages}</span>
      </span>
      <button
        className="bg-red-600 rounded-sm py-0.5 sm:px-3 hover:bg-red-700 transition duration-500 text-lg"
        onClick={() => incrementPage(props.page)}
      >
        Next
      </button>
    </div>
  );
}
