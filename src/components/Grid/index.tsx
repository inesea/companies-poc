import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Company } from '../../types'
import ScrollablePanel from '../ScrollablePanel'
import GridHeader from './GridHeader'

const EmptyCard = styled.div``

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding: 16px 0px; ;
`

export default ({
  headers,
  columns,
  rows = [],
  rowRenderer,
  isEmpty,
}: {
  headers: { property: string; label: string; width: string }[]
  columns: string
  rows: Company[]
  rowRenderer: (row: Company, columns: string) => JSX.Element
  isEmpty: boolean
}): JSX.Element => {
  const [localRows, setLocalRows] = useState<Company[]>([])

  useEffect(() => {
    if (rows.length > 0) {
      setLocalRows(rows)
    }
  }, [rows])

  return isEmpty ? (
    <EmptyCard />
  ) : (
    <Wrapper>
      <GridHeader {...{ headers, columns }} />
      <ScrollablePanel>
        {localRows.map((row: Company) => rowRenderer(row, columns))}
      </ScrollablePanel>
    </Wrapper>
  )
}
