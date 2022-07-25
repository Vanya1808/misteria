import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './Sidebar.css'

const Sidebar = () => {
    return (
      <ProSidebar className='sidebar'>
        <SidebarHeader>
          
          <h1>We will make you a better person!</h1>
          
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem>Home</MenuItem>
            <SubMenu title="Gallery">
              <MenuItem>Component 1</MenuItem>
              <MenuItem>Component 2</MenuItem>
            </SubMenu>
            <MenuItem>Contacts</MenuItem>
            <MenuItem>About</MenuItem>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    )
};

export default Sidebar;