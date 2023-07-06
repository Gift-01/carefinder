import { ReactNode } from "react";
import { Popover } from "@headlessui/react";

interface HoverPopoverProps {
  children: ReactNode;
}

function HoverPopover({ children }: HoverPopoverProps) {
  return (
    <Popover className="relative inline-block">
      {({ open }: { open: boolean }) => (
        <>
          <Popover.Button
            className={`py-[15px] px-[31px] text-white font-bold bg-[#08299B] rounded-xl text-[20px] font-display  items-center ${
              open ? "" : ""
            }`}
          >
            Admin
          </Popover.Button>

          <Popover.Overlay
            className={`fixed inset-0 ${
              open ? "block" : "hidden"
            } bg-black bg-opacity-50`}
          />

          <Popover.Panel className="absolute z-1 w-36 p-4 mt-2 bg-white rounded-lg shadow-md flex flex-col font-bold divide-y text-lg text-[#08299B]">
            <a href="/login" >Login</a>
            <a href="/signup">SignUp</a>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}

export default HoverPopover;
