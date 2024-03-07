import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import './style.css';

// Mock navigation data - you would replace this with real data
const navItems = [
    { name: 'Home', path: '/home' },
    { name: 'Products', path: '/products' },
    { name: 'Requests', path: '/taskboard' },
    // ... other nav items
];

export const NavBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        if (!term) {
            setSearchResults([]);
            return;
        }

        // Filter mock navigation data based on the search term
        const matchedItems = navItems.filter(item =>
            item.name.toLowerCase().includes(term.toLowerCase())
        );
        setSearchResults(matchedItems);
    };

    return (
        <div className="navbar">
            <div className="overlap-group-7">

                <div className="blackbackground-3" />
                {/* Navigation Title */}
                <div className="text-wrapper-38">Products</div>
                {/* User Icon */}
                <img className="user-3" alt="User" src="/img/user-128-24.png" />
                {/* Other icons, if these are interactive, convert to <Link> or <button> */}
                <img className="element-3" alt="Element" src="/img/629578-200-24.png" />
                {/* Shopping Cart Link */}
                <Link to="/shoppingcart">
                    <img
                        className="element-cart-3"
                        alt="Element cart"
                        src="/img/231-2317666-cart-icon-moving-shopping-cart-icon-24.png"
                    />
                </Link>
                {/* Home Link */}
                <Link className="gruppe-32" to="/home">
                    <div className="icon-white-3" />
                </Link>
                {/* Line Image */}
                <img className="linie-5" alt="Linie" src="/img/linie-3-24.png" />
                {/* Requests Link */}
                <Link className="requests-3" to="/taskboard">
                    Requests
                </Link>
            </div>
            {/* Background block */}
            <input
                type="text"
                className="search-input"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            {/* Search Bar */}

            {/* Display search results */}
            {searchResults.length > 0 && (
                <div className="search-results">
                    {searchResults.map((item) => (
                        <Link key={item.name} to={item.path}>{item.name}</Link>
                    ))}
                </div>
            )}

            {/* Display static navigation links */}
            {navItems.map((item) => (
                <Link key={item.name} to={item.path}>{item.name}</Link>
            ))}

            {/* ... Other elements from the overlap-group-7 can be added here ... */}
        </div>
    );
};
