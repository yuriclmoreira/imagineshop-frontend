import { Container } from "@/styles/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Main = styled.main`
  ${Container};
  color: #000;
`;
export const Title = styled.p`
  font-size: 1.875rem;
  font-weight: 700;
  margin: 5.625rem;
`;
export const SubTitle = styled.p`
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
`;

export const ShoppingCartContainer = styled.div`
  display: grid;
  grid-template-columns: 780px auto;
  gap: 1.5rem;
  min-height: 800px;
`;

export const Separator = styled.hr`
  border: 1px solid #c8c9c3;
  border-radius: 0px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0.8rem 0;

  button {
    border: unset;
    background: unset;
    cursor: pointer;
  }
`;

export const DeleteIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.third};
  font-size: 0.85rem;
`;

export const Product = styled.div`
  display: grid;
  grid-template-columns: auto 350px auto;
`;

export const ProductName = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.third};
  font-weight: 700;
  padding: 0;
  margin: 0;
`;
export const ProductPrice = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
  padding: 0;
  padding-right: 1.5rem;
  margin: 0;
  place-self: start end;
`;

export const ShoppingCartPayment = styled.div`
  background-color: #f0f1ef;
  border-radius: 4px;
  padding: 1rem;
`;

export const PaymentTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;
`;

export const PaymentValue = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.third};
  margin: 0;
  margin-top: 5rem;

  span {
    display: block;
  }
`;

export const PaymentShipping = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.third};
  margin: 0;
  margin-top: 1.5rem;

  span {
    display: block;
  }
`;

export const PaymentTotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.125rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 3.125rem 0 5rem 0;
  text-transform: uppercase;
  span {
    display: block;
  }
`;

export const LoginTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  margin: 2rem 0;
`;

export const InputGroup = styled.div`
  span {
    text-transform: uppercase;
    margin-bottom: 0.625rem;
    display: block;
  }

  input {
    width: 100%;
    height: 1.125rem;
    border: unset;
  }
  margin-bottom: 1.3rem;
`;

export const Button = styled.button`
  display: block;
  border: unset;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-weight: 700;
  font-size: 1.5rem;
  font-family: "Montserrat", "sans-serif";
  text-transform: uppercase;
  cursor: pointer;
  margin: 0 auto;
  width: 240px;
  height: 60px;
`;
