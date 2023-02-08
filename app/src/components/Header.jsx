import React from "react"

class Header extends React.Component{
    state = {
        companyName : "cristminix.github.io",
        companyUrl : "#",
        signOutText: "Keluar",
        signOutUrl : "#",
        searchPlaceHolder : "Temukan",
        searchLabel : "Cari"
    }
    render(){
        return(
            <>
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href={this.state.companyUrl}>{this.state.companyName}</a>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <input className="form-control form-control-dark w-100" type="text" placeholder={this.state.searchPlaceHolder} aria-label={this.state.searchLabel}/>
                <div className="navbar-nav">
                    <div className="nav-item text-nowrap">
                    <a className="nav-link px-3" href={this.state.signOutUrl}>{this.state.signOutText}</a>
                    </div>
                </div>
            </header>
            </>
        )
    }
}

export default Header;