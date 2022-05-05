import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const HomeTitle = styled.h1`
  font-size: ${({ theme }) => theme.text.size.large};
  color: ${({ theme }) => theme.colors.primary[100]};
`;
