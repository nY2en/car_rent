import styled from '@emotion/styled';

export const Li = styled.li`
  margin: 24px 14px;
`;

export const Img = styled.div`
  width: 274px;
  height: 269px;

  margin-bottom: 14px;

  background: aqua;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    url(${props => props.img}), lightgray 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  border-radius: 14px;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 264px;
  margin-bottom: 8px;
`;

export const P = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;

  color: #121417;
`;

export const Span = styled.span`
  color: #3470ff;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  width: 270px;
  flex-wrap: wrap;
  margin: -2px -6px;
  margin-bottom: 28px;
`;

export const LiInfo = styled.li`
  margin: 2px 6px;

  font-size: 12px;
  font-weight: 400;
  line-height: 150%;

  color: rgba(18, 20, 23, 0.5);
`;

export const SpanInfo = styled.span`
  width: 1px;
  height: 16px;

  background: rgba(18, 20, 23, 0.1);
`;

export const Button = styled.button`
  padding: 12px 99px;

  font-size: 14px;
  font-weight: 600;
  line-height: 142.857%;

  border: none;
  border-radius: 12px;

  background: #3470ff;
  color: #fff;
`;
