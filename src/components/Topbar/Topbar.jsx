import React from 'react';
import './Topbar.css';
import avatarImg from '../../images/hero0.jpeg'

import { NotificationsNone, Language, Settings  } from '@material-ui/icons';

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Admin Panel</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src={avatarImg} alt="avatar" className="topAvatar" />
                </div>
            </div>
        </div>
    );
};

export default Topbar;