import React, { Component } from 'react';
import {
    MDBNavbarItem,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
} from 'mdb-react-ui-kit';
class DynamicSubMenu extends Component {
    render() {
        <>
        <div>
            <div>
                <p>Create dropdown menu</p>
            </div>
        </div>
        </>
        const menuItems = [
            {
                title: 'Services',
                url: '/services',
                submenu: [
                    {
                        title: 'web design',
                        url: 'web-design',
                    },
                    {
                        title: 'web development',
                        url: 'web-dev',
                    },
                    {
                        title: 'SEO',
                        url: 'seo',
                    },
                ],
            },
            // ...
        ];
        const MenuData = menuItems.map((data) => {
            console.log(data);
            let submenudata = data.submenu.map((submenu) => {
                console.log("called inner loop", submenu);
                return <MDBDropdownItem link>{submenu.title}</MDBDropdownItem>
            })
            return <MDBNavbarItem>
                <MDBDropdown>
                    <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                        {data.title}
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                        {submenudata}                       
                    </MDBDropdownMenu>
                </MDBDropdown>
            </MDBNavbarItem>

        })
        return (
            <div className="class-content mt-2 border-top">
            <h5 className='text-dark border-bottom py-2 fw-bold'>DropDownList:</h5>
            <ul className='sub-content'>
                <li>Create dropdown list using list map array compo</li>
              <li><p>Example{MenuData}</p></li> 
             </ul>
            </div> 
        );
    }
}

export default DynamicSubMenu;