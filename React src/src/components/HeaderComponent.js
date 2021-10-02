import React, { Component } from 'react';
import Logo from '../Logo.jpg'

	class HeaderComponent extends Component {
	render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md  navbar-dark bg-dark">
                        <div>
                            <a class="navbar-brand" href="/">
                                <img src={Logo} alt="XYZ Logo" style={{width:"80px", padding:"5px",paddingBottom:"10px"}}/>  </a>
                            <a href="/" className="navbar-brand" style={{fontSize:"25px", padding:"5px", paddingTop:"30px"}}><b>XYZ Cars Pte. Ltd.</b></a>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}
	export default HeaderComponent
