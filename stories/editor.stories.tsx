import React, { ReactNode } from 'react'
// import { Dropdown, DropdownItem } from 'components/editor/Dropdown'
import Label from 'components/editor/Label'
import Input from 'components/editor/Input'
import TextArea from 'components/editor/TextArea'

import Window from 'components/window/Window'

import { EditorViewCreate } from './header.stories'
import { ContentContainer, Section } from 'components/editor/Form'

export default { title: 'Editor' }

const WindowWithHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Window>
      <EditorViewCreate />
      {children}
    </Window>
  )
}

export const CreateForm = () => (
  <WindowWithHeader>
    <ContentContainer>
      <Section>
        <Label>Bookmark Name</Label>
        <Input placeholder="Awesome cats on the internet" />
      </Section>
      <Section>
        <Label>Bookmark URL</Label>
        <Input placeholder="https://awesome.cats" />
      </Section>
      <Section>
        <Label>Bookmark Description</Label>
        <TextArea placeholder="Check out these awesome cats" />
      </Section>
    </ContentContainer>
  </WindowWithHeader>
)

export const CreateFormWithOverflow = () => (
  <WindowWithHeader>
    <ContentContainer>
      <Section>
        <Label>Bookmark Name</Label>
        <Input placeholder="Awesome cats on the internet" />
      </Section>
      <Section>
        <Label>Bookmark URL</Label>
        <Input placeholder="https://awesome.cats" />
      </Section>
      <Section>
        <Label>Bookmark Description</Label>
        <TextArea placeholder="Check out these awesome cats" />
      </Section>
      <Section>
        <Label>Bookmark Description</Label>
        <TextArea placeholder="Check out these awesome cats" />
      </Section>
    </ContentContainer>
  </WindowWithHeader>
)
