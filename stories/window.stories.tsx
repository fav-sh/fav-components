import React from "react";
import Window from "components/window/Window";

import HeaderContainer from "components/header/HeaderContainer";
import HeaderLeft from "components/header/HeaderLeft";
import HeaderTitle from "components/header/HeaderTitle";
import HeaderRight from "components/header/HeaderRight";

import MenuButton from "components/buttons/MenuButton";
import CreateButton from "components/buttons/CreateButton";

export default { title: "Window" };

export const EmptyWindow = () => {
  return <Window />;
};

export const WindowWithContent = () => {
  return (
    <Window>
      <h1>Hello World</h1>
    </Window>
  );
};

export const WindowWithHeader = () => {
  return (
    <Window>
      <HeaderContainer>
        <HeaderLeft>
          <MenuButton onClick={() => alert("clicked")} />
          <HeaderTitle>Fav</HeaderTitle>
        </HeaderLeft>
        <HeaderRight>
          <CreateButton onClick={() => alert("clicked")} />
        </HeaderRight>
      </HeaderContainer>
      <h1>Hello World</h1>
    </Window>
  );
};
