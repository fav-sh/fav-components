import React from 'react'

import HeaderContainer from 'components/header/HeaderContainer'
import HeaderLeft from 'components/header/HeaderLeft'
import HeaderTitle from 'components/header/HeaderTitle'
import HeaderRight from 'components/header/HeaderRight'

import MenuButton from 'components/buttons/MenuButton'
import CreateButton from 'components/buttons/CreateButton'
import BackButton from 'components/buttons/BackButton'
import SaveButton from 'components/buttons/SaveButton'

export default { title: 'Header' }

export const Header = () => <HeaderContainer />

export const HeaderWithTitle = () => (
  <HeaderContainer>
    <HeaderLeft>
      <HeaderTitle>Fav</HeaderTitle>
    </HeaderLeft>
  </HeaderContainer>
)

export const HeaderWithMenu = () => (
  <HeaderContainer>
    <HeaderLeft>
      <MenuButton onClick={() => alert('clicked')} />
      <HeaderTitle>Fav</HeaderTitle>
    </HeaderLeft>
  </HeaderContainer>
)

export const MainViewHeader = () => (
  <HeaderContainer>
    <HeaderLeft>
      <MenuButton onClick={() => alert('clicked')} />
      <HeaderTitle>Fav</HeaderTitle>
    </HeaderLeft>
    <HeaderRight>
      <CreateButton onClick={() => alert('clicked')} />
    </HeaderRight>
  </HeaderContainer>
)

export const EditorViewHeader = () => (
  <>
    <HeaderContainer>
      <HeaderLeft>
        <BackButton onClick={() => alert('clicked')} />
        <HeaderTitle>Create Bookmark</HeaderTitle>
      </HeaderLeft>
      <HeaderRight>
        <SaveButton onClick={() => alert('clicked')} />
      </HeaderRight>
    </HeaderContainer>
    <HeaderContainer>
      <HeaderLeft>
        <BackButton onClick={() => alert('clicked')} />
        <HeaderTitle>Edit Bookmark</HeaderTitle>
      </HeaderLeft>
      <HeaderRight>
        <SaveButton onClick={() => alert('clicked')} />
      </HeaderRight>
    </HeaderContainer>
  </>
)

export const EditorViewCreate = () => (
  <HeaderContainer>
    <HeaderLeft>
      <BackButton onClick={() => alert('clicked')} />
      <HeaderTitle>Create Bookmark</HeaderTitle>
    </HeaderLeft>
    <HeaderRight>
      <SaveButton onClick={() => alert('clicked')} />
    </HeaderRight>
  </HeaderContainer>
)
