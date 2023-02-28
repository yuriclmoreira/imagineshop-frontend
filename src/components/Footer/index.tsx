import Image from "next/image";
import { Contact, FooterContainer, SocialNetworksList, StyledFooter, SocialNetworksIcon } from "./styles";


import { faFacebookSquare, faInstagramSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import Logo from '@/assets/logo.png';
export default function Footer() {
    return (
        <StyledFooter>
            <FooterContainer>
                <div>
                    <Image src={Logo} width={130} height={60} alt="Logo" />
                </div>
                <Contact>
                    Imagine Shop - +55 (48) 3771 - 1703 3771 - 1823 - imagine@imagineschool.com.br - Rua Miguel Daux, 129 - Coqueiros - Florianópolis/SC
                </Contact>
                <SocialNetworksList>
                    <li>
                        <SocialNetworksIcon icon={faFacebookSquare} />
                    </li>
                    <li>
                        <SocialNetworksIcon icon={faInstagramSquare} />
                    </li>
                    <li>
                        <SocialNetworksIcon icon={faYoutubeSquare} />
                    </li>
                </SocialNetworksList>
            </FooterContainer>
        </StyledFooter>
    )
} 