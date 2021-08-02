import React from 'react'

const Navbar = () => {
  return (
    <div className="vertical-menu">

    <div data-simplebar className="h-100">

        {/* <!--- Sidemenu --> */}
        <div id="sidebar-menu">
            {/* <!-- Left Menu Start --> */}
            <ul className="metismenu list-unstyled" id="side-menu">
                <li className="menu-title text-secondary">Menu</li>

                <li>
                    <a href="/#/dashboard" className="active waves-effect">
                        <i className="ri-dashboard-line"></i>
                        <span>Dashboard</span>
                    </a>
                </li>

                <li>
                    <a href="/#/register" className=" waves-effect">
                        <i className="fa fa-user-plus"></i>
                        <span>Register Officer</span>
                    </a>
                </li>

                <li>
                    <a href="/#/officer-records" className=" waves-effect">
                        <i className="fa fa-users"></i>
                        <span>Officer Records</span>
                    </a>
                </li>
                <li>
                    <a href="/#/dashboard" className=" waves-effect">
                        <i className="ri-artboard-2-line"></i>
                        <span>Admin Manager</span>
                    </a>
                </li>
                <li>
                    <a href="/#/dashboard" className=" waves-effect">
                        <i className="fa fa-lock"></i>
                        <span>Roles & Permission</span>
                    </a>
                </li>
                <li>
                    <a href="/#/dashboard" className=" waves-effect">
                        <i className="fa fa-cog"></i>
                        <span>Settings</span>
                    </a>
                </li>
            </ul>
        </div>
        {/* <!-- Sidebar --> */}
    </div>
</div>
  )
}

export default Navbar
