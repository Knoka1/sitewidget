import React from "react";

import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";

import { WidgetForm } from "./WidgetForm";

interface WidgetProps {
  hoverText?: string;
  company?: string;
  link?: string;
}

function Widget(props: WidgetProps) {
  //The is no need to manage state because headless UI already does it with Popover
  return (
    <Popover className="absolute bottom-4 right-4 md:bottom-8 flex flex-col items-end">
      <Popover.Panel>
        <WidgetForm
          link={props.link || "https://rocketseat.com.br"}
          company={props.company || "Rocketseat"}
        />
      </Popover.Panel>
      <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
        <ChatTeardropDots className="w-6 h-6" />
        {/* Prefarably only use one word since it looks weird when u add 2 or more */}
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          {props.hoverText || "Feedback"}
        </span>
      </Popover.Button>
    </Popover>
  );
}

export default Widget;
