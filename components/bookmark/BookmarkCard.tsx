import React, { useState } from 'react'
import styled from 'styled-components'

type ButtonProps = {
  onClick: () => void
}

export const BookmarkCard = () => {}

const _EditButton = ({ onClick }: ButtonProps) => (
  <_CardButton onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
    >
      <path d="M2 12.88V16h3.12L14 7.12 10.88 4 2 12.88zm14.76-8.51c.33-.33.33-.85 0-1.18l-1.95-1.95c-.33-.33-.85-.33-1.18 0L12 2.88 15.12 6l1.64-1.63z" />
    </svg>
  </_CardButton>
)
const _DeleteButton = ({ onClick }: ButtonProps) => (
  <_CardButton onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
    </svg>
  </_CardButton>
)

const _Container = styled.div``
const _Left = styled.div``
const _Right = styled.div``
const _CardButton = styled.button``
