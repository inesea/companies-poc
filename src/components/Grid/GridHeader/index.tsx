import React from 'react'
import styled from 'styled-components'
import Typography from '../../Typography'

export const Wrapper = styled.div`
  display: grid;
  padding: 0px 12px;
  min-height: 50px;
  align-items: center;
  grid-template-columns: ${({ columns }: { columns: string }) => columns};
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  background-color: #fafafa;
`

// export const Container = styled.div`
//   width: 100%;
// `

export default ({
  headers,
}: {
  headers: [{ label: string; property: string; width: string }]
}): JSX.Element => (
  // <Container>
  <Wrapper
    columns={headers.map(({ width }: { width: string }) => width).join(' ')}
  >
    {headers.map(({ label, property }: { label: string; property: string }) => (
      <Typography key={property}>{label}</Typography>
    ))}
  </Wrapper>
  // </Container>
)
