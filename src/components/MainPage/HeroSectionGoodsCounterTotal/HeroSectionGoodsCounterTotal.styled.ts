import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.sofiaSans};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 15px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 20px;
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const DecorativeElement = styled.div`
  position: absolute;
  bottom: 50%;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #3b3a39;
`;
