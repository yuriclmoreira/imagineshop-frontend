import styled from "styled-components";
import { Container } from "@/styles/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledFooter = styled.footer`
  width: 100vw;
  height: 12.5rem;
  background-color: #f4f4f4;
`;

export const FooterContainer = styled.div`
  ${Container};
  display: grid;
  grid-template-columns: 130px auto 130px;
  padding: 2.5rem;
`;

export const Contact = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.third};
  margin: 0;
  text-align: center;
  margin-top: 8.125rem;
`;

export const SocialNetworksList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1.5rem;
`;

export const SocialNetworksIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.third};
  font-size: 1.75rem;
`;
