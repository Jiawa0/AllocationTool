import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  font-size: 16px;
  display: inline-flex;
  gap: 8px;
`;

const blockStyle = css`
  box-sizing: border-box;
  display: flex;
  width: 48px;
  height: 48px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const Block = styled.div`
  ${blockStyle}
  border:1px solid ${({ theme }) => theme.color.gray};
`;

export const CounterButton = styled.button`
  ${({ theme }) => `
    border:1px solid ${theme.color.main};
    color: ${theme.color.main};
    `}
  border: 1px solid ${(props) => props.theme.color.main};

  ${blockStyle}
  &:not(:disabled):active {
    background-color: ${({ theme }) =>
      theme.convertHexToRGBA(theme.color.main, 0.3)};
  }

  &:disabled {
    ${({ theme }) => `
      border-color:${theme.color.disabled};
      color: ${theme.color.disabled};
      background-color:${theme.convertHexToRGBA(theme.color.disabled, 0.3)};
      cursor:not-allowed;
    `}
  }
`;

export const NumberInput = styled.input`
  ${blockStyle}
  border:1px solid ${({ theme }) => theme.color.gray};
  text-align: center;
  outline: none;
`;
