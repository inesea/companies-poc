import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Company } from '../../types'
import GridHeader from './GridHeader'

const EmptyCard = styled.div``

export default ({
  headers,
  columns,
  rows = [],
  rowRenderer,
  isEmpty,
}: {
  headers: [{ property: string; label: string; width: string }] | any
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
    <>
      <GridHeader {...{ headers, columns }} />
      {localRows.map((row: Company) => rowRenderer(row, columns))}
    </>
  )
}
