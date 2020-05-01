import React, { ReactNode, useState } from 'react'
import { Dropdown, DropdownItem } from 'components/editor/Dropdown'
import Label from 'components/editor/Label'
import Input from 'components/editor/Input'
import TextArea from 'components/editor/TextArea'
import Tag from 'components/editor/Tag'

import Window from 'components/window/Window'

import { EditorViewCreate } from './header.stories'
import {
  ContentContainer,
  Section,
  TagsContainer,
} from 'components/editor/Form'
import styled from 'styled-components'

export default { title: 'Editor' }

const WindowWithHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Window>
      <EditorViewCreate />
      {children}
    </Window>
  )
}

const TagsDropdown = () => {
  const [tags, setTags] = useState<string[]>([
    'Select a Tag',
    'foo',
    'bar',
    'baz',
    'bat',
  ])
  return (
    <>
      <FlexContainer>
        <Dropdown>
          {tags.map((tag: string, index: number) => {
            return (
              <DropdownItem key={index} value={tag}>
                {tag}
              </DropdownItem>
            )
          })}
        </Dropdown>
        <Input style={{ marginLeft: '0.25em' }} placeholder="Enter new Tag" />
      </FlexContainer>
      <TagsContainer>
        {tags.slice(1, tags.length - 1).map((tag: string, index: number) => {
          return <Tag key={index}>{tag}</Tag>
        })}
      </TagsContainer>
    </>
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
      <TagsDropdown />
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

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`
