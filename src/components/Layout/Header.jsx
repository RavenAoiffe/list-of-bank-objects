const Header = ({children}) => {
    return (
        <div className="text-4xl text-center py-3 my-3">
            <h1 className="text-purple-800  font-bold">{children}</h1>
        </div>
    );
}

export default Header;
