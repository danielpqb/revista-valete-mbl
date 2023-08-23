import { FAQ } from "./FAQ";

const mock = [
  {
    title: "Existe edição online da revista?",
    text: "Não. O conceito da Valete é oferecer uma experiência de um produto físico, único, com edição em papel pólen e brochura em 64 páginas do mais fino da bossa. Algo para você ler e colecionar.",
  },
  {
    title:
      "Como funciona o sistema de descontos para quem é assinante da Valente?",
    text: "A assinatura da Valete é o plano premium do Clube MBL e lhe dá acesso a entrada gratuita a todos os eventos do MBL, inclusive os congressos estaduais e o Nacional no fim do ano.",
  },
  {
    title: "Se eu assinar a Valete levo o Clube MBL de graça?",
    text: "Sim. A Valete é uma revista por assinatura que inclui o acesso ao Clube MBL. Clique no site Clube MBL – Entre para a maior comunidade política do Brasil! e conheça mais.",
  },
  {
    title: "Mudei de endereço. Como faço para receber minha Valete?",
    text: "Se você mudar de endereço envie um e-mail para o endereço valete@mbl.org.br",
  },
  {
    title: "Ainda não recebi minha revista. O que está acontecendo?",
    text: "Se você não recebeu envie um e-mail para o endereço valete@mbl.org.br. Sanaremos suas dúvidas e enviaremos o código de rastreio caso sua revista esteja a caminho.",
  },
  {
    title: "Consigo comprar as edições anteriores da revista?",
    text: "Infelizmente, não temos as edições antigas para venda.",
  },
  {
    title: "Quando teremos a revista nas bancas?",
    text: "Provavelmente, em 2024 estreamos a Valete em livrarias e bancas de jornais. Mas as edições atuais somente via assinatura.",
  },
];

export function Doubts() {
  return (
    <div className="relative flex flex-col gap-[4rem] items-center">
      <Title />
      <FAQsContainer />
      <Contact />
      <Background />
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
    <div className="flex flex-col items-center w-[48rem] font-roboto sm:w-full">
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
          <span className="text-blue-secondary underline">
            revistavalete@mbl.org.br
          </span>{" "}
          e responderemos em breve.
        </p>
        <p>Nosso F.A.Q. será periodicamente atualizado.</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-white-secondary w-[var(--vw)] h-[calc(100%+23.5rem)] -z-10 left-[calc((var(--vw)-100%)*-0.5)] top-[-13.5rem]"></div>
  );
}
