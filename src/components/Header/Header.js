import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                {/*// <!-- Fixed navbar -->*/}
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a className="navbar-brand" href="javascript:void(0)">Fixed navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="javascript:void(0)">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="javascript:void(0)">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="javascript:void(0)">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
