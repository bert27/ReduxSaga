import React from "react";
import styled from "styled-components";
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(32, 35, 37);
  padding: 1%;
  width: 20%;
  margin: 1%;

  @media (max-width: 480px) {
    width: 46%;
  }
`;

const Picture = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    height: 24vh;
  }
`;

const PictureLoading = styled.div`
  width: 7em;
  height: 7em;
  background: #f2f2f299;
  border-radius: 50%;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  font-weight: bold;
  padding: 1%;
  @media (max-width: 480px) {
    margin-top: 8px;
    font-size: 10px;
    text-align: center;
  }
`;

const TextLoading = styled.div`
  width: 50px;
  height: 12px;
  background: #f2f2f299;
  margin-bottom: 5px;
  margin-top: 5px;

  @media (max-width: 480px) {
    margin-bottom: 2px;
    margin-top: 2px;
  }
`;

const TextLoadingEmail = styled.div`
  width: 122px;
  height: 12px;
  background: #f2f2f299;
  margin-bottom: 5px;
  margin-top: 5px;

  @media (max-width: 480px) {
    margin-bottom: 2px;
    margin-top: 2px;
  }
`;

const CompletName = styled.div`
  width: 100%;
  height: auto;
  display: flex;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

interface user {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
}

export interface Props {
  item: user;
}

function UserCard({ item }: Props) {
  return (
    <Card data-testid="Card">
      <Picture key={item.id.toString()} id={item.id.toString()}>
        <div>
          {item.id !== 0 ? (
            <img
              style={{
                borderRadius: "50%",
                width: "7em",
                height: "7em",
              }}
              src={item.avatar}
              alt={"faceof" + item.first_name}
            />
          ) : (
            <PictureLoading />
          )}
        </div>

        <TextBox>
          {item.id !== 0 ? (
            <CompletName>
              <div>{item.first_name}</div>
              <div
                style={{
                  marginLeft: "4px",
                }}
              >
                {item.last_name}
              </div>
            </CompletName>
          ) : (
            <TextLoading />
          )}

          {item.id !== 0 ? (
            <div
              style={{
                marginBottom: "5px",
              }}
            >
              {item.email}
            </div>
          ) : (
            <TextLoadingEmail />
          )}
        </TextBox>
      </Picture>
    </Card>
  );
}

export default UserCard;
