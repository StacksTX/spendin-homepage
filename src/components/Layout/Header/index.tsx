import { useState, useMemo } from 'react';
import Navbar from '@/com/ui/Navbar';
import { AppBar, Toolbar, Logo, HeaderOffset } from './styled';
import HamburgerMenu from '@/com/ui/HamburgerMenu';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Box } from '@mui/system';

const MenuItems: IMenuItem[] = [
  {
    id: 'item1',
    label: 'Products',
    url: '/',
    subMenu: [
      { id: 'citem1', label: 'Product 1', icon: <MailIcon />, url: '/' },
      { id: 'citem2', label: 'Product 2', icon: <InboxIcon />, url: '/' },
      { id: 'citem3', label: 'Product 3', icon: <MailIcon />, url: '/' },
      { id: 'citem4', label: 'Product 4', icon: <InboxIcon />, url: '/' },
    ],
  },
  { id: 'item2', label: 'Benefits', url: '/' },
  {
    id: 'item3',
    label: 'How it Works',
    url: '/',
  },
  { id: 'item4', label: 'Pricing', url: '/' },
  {
    id: 'item5',
    label: 'Company',
    url: '/',
    subMenu: [
      { id: 'citem1', label: 'Link 1', url: '/' },
      { id: 'citem2', label: 'Link 2', url: '/' },
      { id: 'citem3', label: 'Link 3', url: '/' },
      { id: 'citem4', label: 'Link 4', url: '/' },
    ],
  },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const open = useMemo(() => drawerOpen, [drawerOpen]);

  return (
    <>
      <AppBar>
        <Toolbar component="div" sx={{ display: { xs: 'none', sm: 'flex' } }}>
          <Box
            component="img"
            sx={{
              justifyContent: 'center',
              width: '144px',
              height: '32px',
              marginRight: '4rem',
              top: '34px',
            }}
            alt="Spend.In"
            src="/SpendInLogo.svg"
          />
          <Navbar items={MenuItems} />
        </Toolbar>
        <HamburgerMenu items={MenuItems} open={open} setOpen={setDrawerOpen} sx={{ display: { xs: 'flex', sm: 'none' } }} />
      </AppBar>
      <HeaderOffset />
    </>
  );
}
