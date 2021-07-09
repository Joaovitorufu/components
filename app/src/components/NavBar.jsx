export const NavBar = () => {
    return (
         <nav>
                <NavItem
                    icon ="home"
                    name ="Início"
                    href = "/"
                />
                <NavItem
                    icon ="users"
                    name ="Usuários"
                    href = "/users"
                />
                <NavItem
                    icon ="register"
                    name ="Registro"
                    href = "/register"
                />
                <NavItem
                    icon ="login"
                    name ="Login"
                    href = "/login"
                />
                <NavItem
                    icon ="test"
                    name ="test"
                    href = "/test"
                />
               
            </nav>
    )
}