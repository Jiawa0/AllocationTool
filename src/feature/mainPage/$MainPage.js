import styled from 'styled-components';

export const PageWrapper = styled.div`
  margin: 48px auto;
  padding: 1rem;
  border: 1px dashed gray;
  max-width: 600px;
`;

export const CounterBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NoteText = styled.div`
  color: ${({ theme }) => theme.color.gray};
  font-size: 14px;
`;
