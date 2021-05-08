import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  max-width: 335px;
  height: auto;
  margin: 0 auto;
  background: #ffffff;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
  padding: 24px;
  margin-top: 40px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 400;
  color: #000000;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0;
`;

const InputRadio = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid #999999;
  cursor: pointer;

  &:hover {
    border: 1px solid #6ca22c;
  }
`;

const InputRadioSelected = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #6ca22c;
  border: 1px solid #6ca22c;
  box-shadow: inset 0 0 0 8px #ffffff;
  cursor: pointer;
`;

const TypeBox = styled.div`
  display: flex;
  align-items: center;
`;

const TypeValue = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-left: 16px;
  color: #999999;
`;

const PriceValue = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #999999;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 16px;
`;

const Price = styled.div`
  font-size: 24px;
  font-weight: 400;
  color: #000000;
  margin: 0 16px;
`;

const Button = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #6ca22c;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    background: #5a8526;
  }
`;

const Card = ({ items, callback }) => {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const handleChange = (item) => {
    setSelectedItem(item);
  };

  const handleSubmit = () => {
    callback(selectedItem);
  };

  return (
    <Wrapper>
      <Header>
        <p>Тип</p>
        <p>Ціна</p>
      </Header>

      {items.map((item, index) => (
        <Row key={index}>
          <TypeBox>
            {item.id === selectedItem.id ? (
              <InputRadioSelected
                onClick={() => handleChange(item)}
              ></InputRadioSelected>
            ) : (
              <InputRadio onClick={() => handleChange(item)}></InputRadio>
            )}
            <TypeValue>{item.weight} г</TypeValue>
          </TypeBox>
          <PriceValue>
            {item.price} {item.currency}
          </PriceValue>
        </Row>
      ))}

      <Footer>
        <Price>
          {selectedItem.price} {selectedItem.currency}
        </Price>
        <Button onClick={handleSubmit}>
          <span className="material-icons" style={{ marginRight: "8px" }}>
            shopping_cart
          </span>
          До кошика
        </Button>
      </Footer>
    </Wrapper>
  );
};

export default Card;
