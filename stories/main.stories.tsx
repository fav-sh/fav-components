import React, { useState } from 'react'
import Window from 'components/window/Window'

import HeaderContainer from 'components/header/HeaderContainer'
import HeaderLeft from 'components/header/HeaderLeft'
import HeaderTitle from 'components/header/HeaderTitle'
import HeaderRight from 'components/header/HeaderRight'

import MenuButton from 'components/buttons/MenuButton'
import CreateButton from 'components/buttons/CreateButton'
import BookmarkCard from 'components/bookmark/BookmarkCard'
import BookmarkList from 'components/bookmark/BookmarkList'
import Sidebar from 'components/sidebar/Sidebar'

export default { title: 'Main Window' }

const bookmarks = [
  {
    name: 'Fav - Firefox Listing',
    href: 'https://addons.mozilla.org/en-US/firefox/addon/fav/',
  },
  {
    name:
      'bansal-io/pattern.css: CSS only library to fill empty background with beautiful patterns.',
    href: 'https://github.com/bansal-io/pattern.css',
  },
  {
    name: 'Simple Analytics - Simple, clean, and privacy-friendly analytics',
    href: 'https://simpleanalytics.com/#signup',
  },
  {
    name: 'Simple and fair pricing | Fathom Analytics',
    href: 'https://usefathom.com/pricing',
  },
  {
    name:
      'Ask HN: What are the best alternatives to Google Analytics? | Hacker News',
    href: 'https://news.ycombinator.com/item?id=18070319',
  },
  {
    name: 'Software Folklore ― Andreas Zwinkau',
    href: 'http://beza1e1.tuxen.de/lore/index.html',
  },
  {
    name: 'VS Code Can Do That?',
    href: 'https://vscodecandothat.com/',
  },
  {
    name:
      'v3.1.0: A massive performance boost and streaming server-side rendering support',
    href:
      'https://medium.com/styled-components/v3-1-0-such-perf-wow-many-streams-c45c434dbd03',
  },
]

const bookmarks1 = [
  {
    name: 'Fav - Firefox Listing',
    href: 'https://addons.mozilla.org/en-US/firefox/addon/fav/',
  },
  {
    name:
      'bansal-io/pattern.css: CSS only library to fill empty background with beautiful patterns.',
    href: 'https://github.com/bansal-io/pattern.css',
  },
  {
    name: 'Simple Analytics - Simple, clean, and privacy-friendly analytics',
    href: 'https://simpleanalytics.com/#signup',
  },
]

const WindowWithHeader = ({ children }: { children: any }) => {
  const [visible, setVisible] = useState(false)
  return (
    <Window>
      <HeaderContainer>
        <HeaderLeft>
          <MenuButton onClick={() => setVisible(!visible)} />
          <HeaderTitle>Fav</HeaderTitle>
        </HeaderLeft>
        <HeaderRight>
          <CreateButton onClick={() => alert('clicked')} />
        </HeaderRight>
      </HeaderContainer>
      <Sidebar visible={visible}>
        <BookmarkList>{children}</BookmarkList>
      </Sidebar>
    </Window>
  )
}

export const BookmarkListShort = () => (
  <WindowWithHeader>
    {bookmarks1.map((bookmark, index) => {
      return (
        <BookmarkCard
          key={index}
          header={bookmark.name}
          link={bookmark.href}
          onEdit={() => console.log('editing')}
          onDelete={() => console.log('deleting')}
        />
      )
    })}
  </WindowWithHeader>
)

export const BookmarkListLong = () => (
  <WindowWithHeader>
    {bookmarks.map((bookmark, index) => {
      return (
        <BookmarkCard
          key={index}
          header={bookmark.name}
          link={bookmark.href}
          onEdit={() => console.log('editing')}
          onDelete={() => console.log('deleting')}
        />
      )
    })}
  </WindowWithHeader>
)
