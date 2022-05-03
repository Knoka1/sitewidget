import React from "react";
import { useState } from "react";

import CloseButton from "../CloseButton";
import bugImageUrl from "../../resources/imgs/emoji.svg";
import ideaImageUrl from "../../resources/imgs/idea.svg";
import thoughtImageUrl from "../../resources/imgs/thought.svg";

import FeedbackTypeStep from "./Steps/FeedbackTypeStep";
import FeedbackContentStep from "./Steps/FeedbackContentStep";

interface WidgetFormProps {
  company: string;
  link: string;
}
export const feedbackTypes = {
  BUG: {
    title: "Problema",
    img: { source: bugImageUrl, alt: "Imagem de inseto" },
  },
  IDEA: {
    title: "Ideia",
    img: { source: ideaImageUrl, alt: "Imagem de lâmpada(ideia)" },
  },
  OTHER: {
    title: "Outro",
    img: { source: thoughtImageUrl, alt: "Imagem de balão de pensamento" },
  },
};
export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(props: WidgetFormProps) {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  function handleRestartWidget() {
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedbackTypeStep onFeedBackTypeHandler={setFeedbackType} />
      ) : (
        <FeedbackContentStep
          feedbackType={feedbackType}
          onWidgetRestart={handleRestartWidget}
        />
      )}
      <footer className="text-xs text-neutral-400">
        <a className="underline underline-offset-2" href={props.link}>
          {props.company}
        </a>{" "}
        agradece seu feedback ♥
      </footer>
    </div>
  );
}
