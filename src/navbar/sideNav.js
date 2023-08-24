import {
  Box,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import React from 'react';

import { IoIosArrowDown } from 'react-icons/io';
import './sidenav.css';

const SideNav = ({ isSidebarOpen, toggleSideBar }) => {
  const sideNavStyles = {
    height: isSidebarOpen ? '100%' : '0', // Adjust the height based on sidebar open state
    opacity: isSidebarOpen ? '3' : '0', // Adjust the opacity for a fade-in effect
    transition: 'height 10s smooth, opacity 0.3s ease', // Apply transitions
  };
  return (
    <>
      <Box
        className={
          isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
        bg={isSidebarOpen ? '#3D464D' : 'transparent'}
        style={sideNavStyles}
      >
        {/* <Button className="close-btn" onClick={() => setSidemenuOpen(!isSidemenuOpen)}>
  {isSidebarOpen ? <FaTimes /> : <FcMenu />}  
     </Button> */}

        {isSidebarOpen && (
          <List
            display={'flex'}
            justifyContent={'normal'}
            color={'white'}
            h={'30%'}
            fontSize={'1rem'}
            fontWeight={'500'}
            gap={'0.5rem'}
            flexDir={'column'}
            ml={'1rem'}
          >
            <ListItem>Home</ListItem>
            <ListItem>Shop</ListItem>
            <ListItem>Shop Details</ListItem>
            <Menu p={'0'} w={{ base: '3rem', md: '0', lg: '0' }}>
              <MenuButton
                as={Button}
                fontSize={'1rem'}
                fontWeight={'500'}
                h={'2rem'}
                bg={'transparent'}
                borderRadius={'none'}
                _hover={'none'}
                p={'0'}
                _active={'none'}
              >
                <Box display={'flex'} color={'white'} gap={'0'}>
                  Pages
                  <Box mt={'3px'}>
                    <IoIosArrowDown />
                  </Box>
                </Box>
              </MenuButton>
              <MenuList bg={'#FFD333'} color={'black'} borderRadius={'none'}>
                <MenuItem bg={'#FFD333'}>Shopping Cart</MenuItem>
                <MenuItem bg={'#FFD333'}>Checkout</MenuItem>
              </MenuList>
            </Menu>
            <ListItem>Contact</ListItem>
          </List>
        )}
      </Box>
    </>
  );
};

export default SideNav;
