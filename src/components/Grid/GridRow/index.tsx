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

export const Highlight = styled.span`
  margin: 0;
  background-color: #33fff5;
  font-size: 14px;
  color: #202020;
  line-height: 1.5;
`

export default ({
  row,
  columns,
  searchQuery,
}: {
  row: Company
  columns: string
  searchQuery: string
}): JSX.Element => {
  const { name, logo, categories, city } = row
  const nameLower = name.toLowerCase()
  return (
    <Wrapper columns={columns}>
      {searchQuery ? (
        <>
          <div>
            <Typography>
              {nameLower.includes(searchQuery) &&
                name.substr(0, nameLower.indexOf(searchQuery))}
            </Typography>
            <Highlight>
              {nameLower.includes(searchQuery) &&
                name.substr(nameLower.indexOf(searchQuery), searchQuery.length)}
            </Highlight>
            <Typography>
              {nameLower.includes(searchQuery) &&
                name.substr(
                  nameLower.indexOf(searchQuery) + searchQuery.length,
                  name.length - 1
                )}
            </Typography>
          </div>
        </>
      ) : (
        <Typography>{name}</Typography>
      )}
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
