import styled from 'styled-components';

export const PageWrapper = styled.div`
  margin: 10%;
  padding: 1rem;
  border: 1px dashed gray;
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
