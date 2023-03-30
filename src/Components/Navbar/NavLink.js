import React from 'react';
import PropTypes from 'prop-types';

const NavLink = ({ title, url }) => {
    return (
        <>
            <li>
                <a href={url}>{title}</a>
            </li>
        </>
    )
}

NavLink.defaultProps = {
    title: "Link",
    url: "#"
}

NavLink.propTypes = {
    title: PropTypes.string
}

export default NavLink