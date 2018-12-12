import styled from '@emotion/styled';

export const Parent = styled.div<{colWidth:string, rowHeight:number}>`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${props => props.colWidth}, 1fr)
  );
  grid-gap: 16px;
`

export const Child = styled.div<{span: number}>`
  grid-row: span ${props => props.span};
  height: max-content;
`