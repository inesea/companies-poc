import React from 'react'
import styled from 'styled-components'
import { Company } from '../../../types'
import Typography from '../../Typography'

const Wrapper = styled.div`
  align-self: stretch;
  display: grid;
  padding: 16px 8px;
  font-size: 13px;
  min-height: 42px;
  align-items: center;
  border-bottom: 1px solid lightgray;
  grid-template-columns: ${({ columns }: { columns: string }) => columns};
  grid-column-gap: 16px;
  grid-row-gap: 16px;
`

const Flexbox = styled.div`
  display: flex;
  gap: 4px;
`

const Chip = styled.div`
  border: 1px solid lightgray;
  border-radius: 8px;
  padding: 4px 8px;
  color: #202020;
  line-height: 1.5;
`

export default ({
  row,
  columns,
}: {
  row: Company
  columns: string
}): JSX.Element => {
  const { name, logo, categories, city } = row
  return (
    <Wrapper columns={columns}>
      <Typography>{name}</Typography>
      <Typography>{city}</Typography>
      <img src={logo} style={{ width: '15px', height: '15px' }} />
      <Flexbox>
        {categories?.map((category: string) => (
          <Chip key={category}>{category}</Chip>
        ))}
      </Flexbox>
    </Wrapper>
  )
}
