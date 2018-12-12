import styled from '@emotion/styled';

export const LayoutWrapper = styled.section`
  display: flex;
  flex-flow: column;
  overflow: hidden;
  height: 100%;
  position: absolute;
  width: 100%;
`;

export const LayoutContentWrapper = styled.div`
  overflow: auto;
  height: 100%;
  -webkit-overflow-scrolling: touch;
`;

export const LayoutContent = styled.section`
  padding: 16px;

  ${props =>
    props.theme.notMobile(`
      max-width: 900px;
      padding: 16px 32px;
      margin: auto;
  `)}
`;
