import * as React from "react";

import TagLine from "./common/TagLine";
import Logo from "./common/Logo";
import Nav from "./common/Nav";

const Header = () => {
    return (
        <header className="container group">
            <Logo />
            <TagLine />
            <Nav />
      </header>
    )
}

export default Header;