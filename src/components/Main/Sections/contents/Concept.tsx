import { Clubs } from "@/components/CardSuits/Clubs";

export function Concept() {
  return (
    <div className="flex gap-[2.5rem]">
      <div className="flex flex-col flex-1 gap-[2.5rem]">
        <h1 className="text-[2.5rem] font-bold leading-[3rem]">
          Com edição exclusivamente impressa, a Revista Valete é única!
        </h1>
        <div className="font-roboto flex gap-[2rem]">
          <FollowUs />
          <Text />
        </div>
      </div>
      <img
        src="/images/img002.png"
        className="w-[30rem] h-[40rem]"
      />
    </div>
  );
}

function FollowUs() {
  return (
    <div className="flex flex-col gap-[1rem] items-center w-fit">
      <h1 className="text-[1.125rem] font-bold">Siga-nos</h1>
      <div className="flex flex-col gap-[2.5rem]">
        <Clubs className="w-6 h-6" />
        <Clubs className="w-6 h-6" />
        <Clubs className="w-6 h-6" />
        <Clubs className="w-6 h-6" />
        <Clubs className="w-6 h-6" />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="flex flex-1 flex-col px-1 font-light text-[1.125rem] leading-[1.8rem]">
      <p>
        A Revista Valete nasce na contramão de boa parte dos projetos do nosso
        campo político. Assim como o MBL, é algo sui generis. A publicação traz
        um conteúdo do mais alto nível produzido por nossos redatores e um time
        de notáveis. A cada edição mensal temos um assunto escolhido, que é
        abordado a partir de diversas perspectivas, da cultura à economia,
        passando por política e filosofia.
      </p>
      <p>
        Temos análises descontraídas e inteligentes sobre temas que vão do fim
        do futebol arte até os perigos da inteligência artificial. Na seção
        literária, temos crônicas e poesia de alguns dos melhores poetas
        nacionais, como Hugo Langone, Érico Nogueira e outros.
      </p>
      <p>
        Todo número traz reviews de álbuns, exposições de arte, livros e
        restaurantes.
      </p>
    </div>
  );
}
