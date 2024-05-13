import {
  ArrowLeftFromLine,
  ArrowRightFromLine,
  Plus,
  Trash2,
} from "lucide-react";
import { useState } from "react";

function App() {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="flex">
      <div>
        <nav
          className={`fixed top-0 ${
            isOpen ? "left-0" : "-left-full"
          } bottom-0 lg:sticky lg:h-[100vh]  divide-y p-2 w-[300px] border bg-gray-100`}
        >
          <div className="flex justify-between align-middle py-8">
            <span className="text-2xl font-semibold text-gray-800">
              Simple CMS
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
                <Plus size={28} strokeWidth={2} />
              </span>
            </div>

            <div className="list-none flex justify-start flex-col gap-3">
              <li className="flex justify-between">
                <span
                  className="text-gray-600 hover:text-gray-700 cursor-pointer
               "
                >
                  Trash 1
                </span>{" "}
                <span
                  className="
                text-gray-600 hover:text-gray-700 cursor-pointer
                "
                >
                  <Trash2 size={22} />
                </span>
              </li>
              <li className="flex justify-between">
                <span
                  className="text-gray-600 hover:text-gray-700 cursor-pointer
               "
                >
                  Trash 2
                </span>{" "}
                <span
                  className="
                text-gray-600 hover:text-gray-700 cursor-pointer
                "
                >
                  <Trash2 size={22} />
                </span>
              </li>
              <li className="flex justify-between">
                <span
                  className="text-gray-600 hover:text-gray-700 cursor-pointer
               "
                >
                  Trash 3
                </span>{" "}
                <span
                  className="
                text-gray-600 hover:text-gray-700 cursor-pointer
                "
                >
                  <Trash2 size={22} />
                </span>
              </li>
            </div>
          </div>
        </nav>
      </div>
      <div className="grow">
        <span
          onClick={toggle}
          className="text-gray-600 lg:hidden hover:text-gray-700 cursor-pointer"
        >
          <ArrowRightFromLine />
        </span>
        <div className="h-[200vh]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad animi
          sed, voluptate voluptatum pariatur excepturi, soluta adipisci
          perferendis eius libero alias recusandae illum quasi, aliquam suscipit
          tenetur? Labore, ipsam dolorem.
        </div>
      </div>
    </div>
  );
}

export default App;
