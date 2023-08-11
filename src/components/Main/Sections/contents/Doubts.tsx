import { Hearts } from "@/components/CardSuits/Hearts";
import Link from "next/link";
import { ComponentProps } from "react";

const mock = [
  {
    title: "Existe edição online da revista?",
    text: "Não. O conceito da Valete é oferecer uma experiência de um produto físico, único, com edição em papel pólen e brochura em 64 páginas do mais fino da bossa. Algo para você ler e colecionar.",
  },
  {
    title:
      "Como funciona o sistema de descontos para quem é assinante da Valente?",
    text: "",
  },
  {
    title: "Se eu assinar a Valete levo o Clube MBL de graça?",
    text: "",
  },
  {
    title: "Mudei de endereço. Como faço para receber minha Valete?",
    text: "",
  },
  {
    title: "Ainda não recebi minha revista. O que está acontecendo?",
    text: "",
  },
  {
    title: "Consigo comprar as edições anteriores da revista?",
    text: "",
  },
  {
    title: "Quando teremos a revista nas bancas?",
    text: "",
  },
];

export function Doubts() {
  return (
    <div className="flex flex-col gap-[4rem] items-center">
      <Title />
      <FAQsContainer />
      <Contact />
    </div>
  );
}

function Title() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[2.5rem] leading-[3rem] font-bold">
        F.A.Q. Revista Valete
      </h1>
    </div>
  );
}

function FAQsContainer() {
  return (
    <div className="flex flex-col items-center w-[48rem] font-roboto">
      <div className="flex flex-col gap-2 w-full">
        {mock.map((answer, index) => {
          return (
            <FAQ
              answer={answer}
              key={index}
              isOpen={true}
            />
          );
        })}
      </div>
    </div>
  );
}

interface DivProps extends ComponentProps<"div"> {
  answer: { title: string; text: string };
  isOpen?: boolean;
}
function FAQ(props: DivProps) {
  return (
    <div className="border-[1px] border-blue-secondary">
      <div className="flex justify-between bg-blue-secondary h-[3rem] px-[1.375rem] py-[0.5rem] text-white-primary font-semibold leading-normal text-[1.125rem]">
        <p className="flex items-center h-full">{props.answer.title}</p>
        <Hearts className="fill-white-primary" />
      </div>
      {props.isOpen && props.answer.text && (
        <div className="h-fit p-5">
          <p>{props.answer.text}</p>
        </div>
      )}
    </div>
  );
}

function Contact() {
  return (
    <div className="flex flex-col items-center gap-[1.5rem]">
      <div className="flex flex-col items-center gap-[2.5rem]">
        <h1 className="text-[1.5rem] leading-[1.8rem] font-bold">
          Tem mais dúvidas?
        </h1>
      </div>
      <div className="font-roboto font-light text-[1.125rem] leading-[1.68rem]">
        <p>
          Envie para{" "}
          <Link
            className="text-blue-secondary underline"
            href={""}
          >
            revistavalete@mbl.org.br
          </Link>{" "}
          e responderemos em breve.
        </p>
        <p>Nosso F.A.Q. será periodicamente atualizado.</p>
      </div>
    </div>
  );
}
