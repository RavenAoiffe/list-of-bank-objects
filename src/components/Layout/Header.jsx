const Header = ({children}) => {
    return (
        <div className="text-4xl py-3 my-3">
            <h1 className="text-black font-bold">{children}</h1>
        </div>
    );
}

export default Header;
