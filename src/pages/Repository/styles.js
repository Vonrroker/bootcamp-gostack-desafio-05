import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border: 1px solid #eee;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueState = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const ButtonState = styled.input`
  margin: 3px;
  background-color: #ffffff;
  font-family: Arial;
  color: ${props => (props.issueState === props.value ? '#7159c1' : '#000')};
  font-size: 14px;
  padding: 0px 0px 0px 0px;
  text-decoration: none;
  border: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #7159c1;
          }
        }

        span {
          background: #eee;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;

export const ButtonPage = styled.input`
  background-color: #ffffff;
  font-family: Arial;
  color: #7159c1;
  font-size: 14px;
  padding: 0px 0px 0px 0px;
  text-decoration: none;
  border: none;
  margin: 10px;

  &:hover {
    text-decoration: underline;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const PageChoise = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 5px;
`;
