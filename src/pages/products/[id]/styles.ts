import { Container } from "@/styles/utils";
import styled from "styled-components";

export const ProductContainer = styled.main`
  ${Container};
  color: #000;
`;
export const ProductDetail = styled.div`
  display: grid;
  grid-template-columns: 31.25rem auto;
  gap: 1rem;
  margin: 3.125rem;
`;
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eaeaea;
  border-radius: 4px;
`;
export const ProductName = styled.p`
  margin: 0;
  font-size: 1.875rem;
  font-weight: 700;
`;

export const ProductPrice = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.125rem;
  font-weight: 700;
  margin: 0;
  margin-top: 2.8125rem;
`;
export const ProductSplitPrice = styled.small`
  font-size: 0.875rem;
  color: #999;
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: unset;
  border-radius: 4px;
  width: 290px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  margin: 2.25rem 0;
`;

export const SummaryTitle = styled.p`
  font-size: 1.875rem;
  font-weight: 700;
  margin: 0;
  margin-bottom: 2.8rem;
  color: #000;
  span {
    font-size: 1.875rem;
    font-weight: 700;
    text-decoration: underline ${({ theme }) => theme.colors.primary};
  }
`;

export const ProductDescription = styled.small`
  font-size: 0.875rem;
`;
export const Summary = styled.div`
  padding-bottom: 3rem;
`;
