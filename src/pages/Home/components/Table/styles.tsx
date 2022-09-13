import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
`;

export const Thead = styled.tr`
  border-bottom: thin solid rgba(51, 51, 51, 0.5);
  color: #79797a;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  display: grid;
  grid-template-columns: 60% 20% 20%;
  padding: 16px 8px;
  margin-top: 8px;
`;

export const Tbody = styled(Thead)`
  border-bottom: thin solid rgba(51, 51, 51, 0.1);
  color: #19191a;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  display: grid;
  grid-template-columns: 60% 20% 20%;
  & {
    padding: 8px;
    cursor: pointer;
  }
`;

export const TH = styled.th`
  height: 15.93px;
  text-align: start;
  line-height: 16px;
  margin-bottom: 5px;
`;
export const StarContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
