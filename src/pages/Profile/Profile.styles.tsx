import styled from 'styled-components';

export const StyledProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${({ theme }) => theme.spacing.factorOf(2)};
`;

export const StyledName = styled.span`
  font-size: ${({ theme }) => theme.text.size.h1};
  margin: ${({ theme }) => theme.spacing.factorOf(1)};
`;

export const StyledEmail = styled.span`
  font-size: ${({ theme }) => theme.text.size.h3};
  margin: ${({ theme }) => theme.spacing.factorOf(1)};
`;
