import { ArrowLeftFromLine, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

function RelationLabel({ name }: { name: string }) {
  return (
    <li className="flex justify-between">
      <Link to={"/relation/1"}>
        <span
          className="text-gray-600 hover:text-gray-700 cursor-pointer
        "
        >
          {name}
        </span>{" "}
      </Link>
      <span
        className="
                text-gray-600 hover:text-gray-700 cursor-pointer
                "
      >
        <Trash2 size={22} />
      </span>
    </li>
  );
}

function Navbar({ toggle, isOpen }: { toggle: () => void; isOpen: boolean }) {
  return (
    <div className="z-20">
      <nav
        className={`fixed top-0 ${
          isOpen ? "left-0" : "-left-full"
        } bottom-0 lg:sticky lg:h-[100vh]  divide-y p-2 w-[300px] border bg-gray-50 transition-all duration-700 ease`}
      >
        <div className="flex justify-between align-middle py-8">
          <span className="text-2xl font-semibold text-gray-800">
            <Link to={"/"}>Simple CMS</Link>
          </span>
          <span
            onClick={toggle}
            className="text-gray-600 lg:hidden hover:text-gray-700 cursor-pointer"
          >
            <ArrowLeftFromLine />
          </span>
        </div>
        <div className="">
          <div className="flex justify-between py-6 ">
            <span className="text-gray-600 font-semibold">Relations</span>
            <span className="text-gray-600 hover:text-gray-700 cursor-pointer">
              <Link to={"/relationCreation"}>
                <Plus size={28} strokeWidth={2} />
              </Link>
            </span>
          </div>

          <div className="list-none flex justify-start flex-col gap-3">
            <RelationLabel name="table 1" />
            <RelationLabel name="table 2" />
            <RelationLabel name="table 3" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
