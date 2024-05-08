import { useState } from "react";
import { MenuMobile } from "../menuMobile";
import { TextComponent } from "../text";
import * as S from "./styles";
import { ButtonComponent } from "../button";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export const HeaderMenu = ({ variant, title, name }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const navigation = useNavigation();


  return(
    <S.SecondayContainer isOpen={menuIsOpen}>
    <S.TopContainer height="100px">
      <S.Center height="50px">
        <TextComponent color={"#fff"} variant={"Title9"}>
          {title}
        </TextComponent>
      </S.Center>
    </S.TopContainer>
  </S.SecondayContainer>
  )
};
