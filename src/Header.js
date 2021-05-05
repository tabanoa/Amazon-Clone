import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom';
import {useStateValue} from './StateProvider';

function Header() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="header">
        <Link to="/">
          <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
        </Link>
          <div className="header_search">
            <input className="header_searchInput" type="text" />
            {/* Search Icon */}
            <SearchIcon className="header_searchIcon" />
            {/* // Logo */}
          </div>

          <div className="header_nav"></div>
            <div className="header_option">
                <span className="header_optionLineOne">Hello Guest</span>
                <span className="header_optionLineTwo">Sign In</span>
            </div>

            <div className="header_option">
                <span className="header_optionLineOne">Returns</span>
                <span className="header_optionLineTwo">& Orders</span>
            </div>

            <div className="header_option">
            <span className="header_optionLineOne">Your</span>
                <span className="header_optionLineTwo">Prime</span>
            </div>
            <Link to="/Checkout">
            <div className="header_optionBasket">
                <ShoppingBasketIcon />
                <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
            </div>
            </Link>
        </div>
    )
}

export default Header
