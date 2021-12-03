import React from 'react'
import { InView } from 'react-intersection-observer'
import styled from 'styled-components'
import { Company } from '../../../types'
import Flexbox from '../../Flexbox'
import Typography from '../../Typography'

const Wrapper = styled.div`
  align-self: stretch;
  display: grid;
  padding: 16px 8px;
  font-size: 13px;
  min-height: 42px;
  align-items: center;
  border-bottom: 1px solid whitesmoke;
  grid-template-columns: ${({ columns }: { columns: string }) => columns};
  grid-column-gap: 16px;
  grid-row-gap: 16px;
`

const Chip = styled.div`
  border: 1px solid lightgray;
  border-radius: 8px;
  padding: 4px 8px;
  color: #202020;
  line-height: 1.5;
  background-color: ${({ isHighlighted }: { isHighlighted: boolean }) =>
    isHighlighted ? 'lemonchiffon' : ''};
`

export const Highlight = styled.span`
  margin: 0;
  background-color: lemonchiffon;
  font-size: 14px;
  color: #202020;
  line-height: 1.5;
`

export default ({
  row,
  columns,
  searchQuery,
  selectedCategories = [],
}: {
  row: Company
  columns: string
  searchQuery: string
  selectedCategories: string[]
}): JSX.Element => {
  const { name, logo, categories, city } = row
  const nameLower = name.toLowerCase()
  return (
    <InView>
      {({ ref, inView }) => (
        <Wrapper ref={ref} columns={columns}>
          {inView && (
            <>
              {searchQuery ? (
                <>
                  <div>
                    <Typography>
                      {nameLower.includes(searchQuery) &&
                        name.substr(0, nameLower.indexOf(searchQuery))}
                    </Typography>
                    <Highlight>
                      {nameLower.includes(searchQuery) &&
                        name.substr(
                          nameLower.indexOf(searchQuery),
                          searchQuery.length
                        )}
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
              <Flexbox gap="4px">
                {categories?.map((category: string) => (
                  <Chip
                    key={category}
                    isHighlighted={selectedCategories.includes(category)}
                  >
                    {category}
                  </Chip>
                ))}
              </Flexbox>
            </>
          )}
        </Wrapper>
      )}
    </InView>
  )
}
