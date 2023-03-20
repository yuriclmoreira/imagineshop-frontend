import Link from 'next/link';
import Image from 'next/image';

import Logo from '@/assets/logo.png';
import ShoppingCartLog from '@/assets/carrinho.png';

import { MenuItem, MenuList, Navbar, StyledHeader } from './styles';

export default function Header() {
    return (
        <StyledHeader>
            <Navbar>

                <Image src={Logo} width={200} height={100} alt="Logo" />
                <MenuList>
                    <MenuItem>
                        <Link href="/">

                            Home
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href="/about">

                            Sobre
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href="/shooping-card">
                            <Image src={ShoppingCartLog} width={52} height={52} alt="shopping cart image" />
                        </Link>

                    </MenuItem>
                </MenuList>
            </Navbar>
        </StyledHeader>
    )
}