import { Footer } from "../footer";
import { TextComponent } from "../text";
import * as S from "./styles";

export const Template = ({ children }) => {
  return (
    <S.Container>
      {children}
    </S.Container>
  );
};
