import React from 'react'
import _BookmarkCard from 'components/bookmark/BookmarkCard'

export default { title: 'Bookmark Card' }

export const BookmarkCard = () => (
  <_BookmarkCard
    header="Link Title"
    link="http://acme.com"
    onEdit={() => alert('editing')}
    onDelete={() => alert('deleting')}
  />
)
export const BookmarkCardLongTitle = () => (
  <_BookmarkCard
    header="ACMe.com :: Contact :: Super Long Title - More title content - And some more"
    link="http://acme.com"
    onEdit={() => alert('editing')}
    onDelete={() => alert('deleting')}
  />
)

export const BookmarkCardLongLink = () => (
  <_BookmarkCard
    header="Link Title"
    link="http://acme.com/path/to/some/very/very/nested/item?with=some&arguments=and&commands=done"
    onEdit={() => alert('editing')}
    onDelete={() => alert('deleting')}
  />
)

export const BookmarkCardLong = () => (
  <_BookmarkCard
    header="ACMe.com :: Contact :: Super Long Title - More title content - And some more"
    link="http://acme.com/path/to/some/very/very/nested/item?with=some&arguments=and&commands=done"
    onEdit={() => alert('editing')}
    onDelete={() => alert('deleting')}
  />
)
