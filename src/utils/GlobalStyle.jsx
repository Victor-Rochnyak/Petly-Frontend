import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 
body {
    margin: 0;
  font-family: 'Manrope', 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
    background-color: ${p => p.theme.colors.mainBackground};
    &::-webkit-scrollbar {
    width: 0px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 1px;
    background-color: ${p => p.theme.colors.mainBackground};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.colors.accent};
    border-radius: 1px;
  }
}
.Toastify__toast-theme--light.Toastify__toast--info {
  color: ${p => p.theme.colors.accent};
  svg{
    fill: currentColor;
  }
}
.Toastify__progress-bar-theme--light.Toastify__progress-bar--info{
  color: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.accent};
}
table {
  text-indent: 0;
  border-color: inherit;
}
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  @media ${p => p.theme.media.tablet} {
    width: 480px;
  }
  @media ${p => p.theme.media.tablet} {
    padding-left: 32px;
    padding-right: 32px;
    width: 768px;
  }
  @media ${p => p.theme.media.desktop} {
    padding-left: 18px;
    padding-right: 18px;
    width: 1280px;
  }
`;

export const Section = styled.section`
  min-height: 97vh;
  padding-top: 42px;
  padding-bottom: 100px;
  color: ${p => p.theme.colors.heading};
  @media ${p => p.theme.media.tablet} {
    padding-top: 88px;
  }
  @media ${p => p.theme.media.desktop} {
    padding-top: 60px;
  }
`;
