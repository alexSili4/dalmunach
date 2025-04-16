import styled from '@emotion/styled';

export const Link = styled.a`
  flex-shrink: 0;
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.bottle + 1};
  display: flex;
  width: 100%;
  padding: ${({ theme }) => theme.spacing()}px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: 100px;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    border-color: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 222px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 296px;
  }
`;

export const LinkTitleWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: 100px;
  background-color: transparent;
  padding: ${({ theme }) => theme.spacing(6)}px;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc},
    background-color ${({ theme }) => theme.transitionDurationAndFunc};

  a:is(:hover, :focus) > & {
    border-color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const LinkTitle = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.sofiaSans};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: 10%;
  text-transform: uppercase;
`;
