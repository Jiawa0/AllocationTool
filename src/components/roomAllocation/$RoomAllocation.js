import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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

export const Room = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 0;

  & + & {
    border-top: 1px solid ${({ theme }) => theme.color.gray};
  }
`;

export const RemainSection = styled.div`
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: 8px;
  background-color: ${({ theme }) =>
    theme.convertHexToRGBA(theme.color.main, 0.15)};
  color: ${({ theme }) => theme.color.gray};
`;

export const Label = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
