import Link from 'next/link';
import Image from 'next/image';

import Logo from '@/assets/logo.png';
import ShoppingCartLog from '@/assets/carrinho.png';

import { MenuItem, MenuList, Navbar, StyledHeader } from './styles';

export default function Header() {
    return (
        <StyledHeader>
            <Navbar>

                <Image src={Logo} width={100} height={50} alt="Logo" />
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
                        <Link href="/shopping-cart">
                            <Image src={ShoppingCartLog} width={40} height={40} alt="shopping cart image" />
                        </Link>

                    </MenuItem>
                </MenuList>
            </Navbar>
        </StyledHeader>
    )
}