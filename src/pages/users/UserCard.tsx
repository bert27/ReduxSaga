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

const UserCard = (props) => {
  const { item } = props;

  return (
    <Card>
      <Picture key={item.id} id={item.id}>
        <div>
          {item.avatar ? (
            <img
              style={{
                borderRadius: "50%",
                width: "7em",
                height: "7em",
              }}
              src={item.avatar}
              alt={item.first_name}
            />
          ) : (
            <PictureLoading />
          )}
        </div>

        <TextBox>
          {item.last_name ? (
            <div
              style={{
                marginBottom: "5px",
              }}
            >
              {item.name}
            </div>
          ) : (
            <TextLoading />
          )}

          {item.last_name ? (
            <div
              style={{
                marginBottom: "5px",
              }}
            >
              {item.last_name}
            </div>
          ) : (
            <TextLoading />
          )}

          {item.email ? (
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
};

export default UserCard;
