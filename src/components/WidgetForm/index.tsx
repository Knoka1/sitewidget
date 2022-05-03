import React from "react";
import { useState } from "react";

import CloseButton from "../CloseButton";
import bugImageUrl from "../../resources/imgs/emoji.svg";
import ideaImageUrl from "../../resources/imgs/idea.svg";
import thoughtImageUrl from "../../resources/imgs/thought.svg";
interface WidgetFormProps {
  company: string;
  link: string;
}
const feedbackTypes = {
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
type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(props: WidgetFormProps) {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>
      {!feedbackType ? (
        <div className="flex py-8 gap-2 w-full">
          {Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button
                key={key}
                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                type="button"
                onClick={() => setFeedbackType(key as FeedbackType)}
              >
                <img src={value.img.source} alt={value.img.alt} />
                <span>{value.title}</span>
              </button>
            );
          })}
        </div>
      ) : (
        <p>Feedback Content</p>
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
