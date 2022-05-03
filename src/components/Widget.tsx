import React from "react";

import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";

interface WidgetProps {
  hoverText?: string;
}

function Widget(props: WidgetProps) {
  //The is no need to manage state because headless UI already does it with Popover
  return (
    <Popover className="absolute bottom-5 right-4">
      <Popover.Panel>{props.hoverText || <p>Panel Text</p>}</Popover.Panel>
      <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}

export default Widget;
