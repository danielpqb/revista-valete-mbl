import { CustomIcon } from "@/components/CustomIcons/CustomIcons";
import IonIcon from "@/components/IonIcon/IonIcon";
import NextLink from "next/link";

export function Concept() {
  return (
    <div className="flex gap-[2.5rem] sm:flex-col">
      <div className="flex flex-col flex-1 gap-[2.5rem]">
        <h1 className="text-[2.5rem] font-bold leading-[3rem] sm:text-[1.5rem] sm:leading-[1.8rem] sm:text-center sm:px-[10%]">
          Com edição exclusivamente impressa, a Revista Valete é única!
        </h1>
        <div className="font-roboto flex gap-[2rem] sm:flex sm:flex-col">
          <FollowUs />
          <Text />
        </div>
      </div>
      <img
        src="/images/img002.png"
        className="w-[30rem] h-[40rem] sm:w-full sm:h-fit"
      />
    </div>
  );
}

function FollowUs() {
  return (
    <div className="flex flex-col gap-[1.5rem] items-center w-fit sm:w-full sm:gap-[1rem]">
      <h1 className="text-[1.125rem] font-bold">Siga-nos</h1>
      <div className="flex flex-col gap-[2.5rem] sm:flex-row">
        <NextLink
          href="https://www.facebook.com/mblivre"
          target="_blank"
        >
          <CustomIcon.Facebook className="text-[1.5rem] active:scale-[0.9] select-none" />
        </NextLink>
        <NextLink
          href="https://www.youtube.com/@mblivre"
          target="_blank"
        >
          <IonIcon
            name="logo-youtube"
            className="text-[1.5rem] active:scale-[0.9] select-none"
          />
        </NextLink>
        <NextLink
          href="https://www.instagram.com/mblivre/"
          target="_blank"
        >
          <IonIcon
            name="logo-instagram"
            className="text-[1.5rem] active:scale-[0.9] select-none"
          />
        </NextLink>
        <NextLink
          href="https://twitter.com/MBLivre"
          target="_blank"
        >
          <IonIcon
            name="logo-twitter"
            className="text-[1.5rem] active:scale-[0.9] select-none"
          />
        </NextLink>
        <NextLink
          href="https://www.twitch.tv/mblivre"
          target="_blank"
        >
          <IonIcon
            name="logo-twitch"
            className="text-[1.5rem] active:scale-[0.9] select-none"
          />
        </NextLink>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="flex flex-1 flex-col px-1 font-light text-[1.125rem] leading-[1.8rem] sm:text-[1rem] sm:leading-[1.6rem]">
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
