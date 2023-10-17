const Header = ({children}) => {
    return (
        <div className="text-4xl py-3 mx-3 md:my-3 md:mx-0 invert drop-shadow-xl">
            <h1 className="text-white font-black">{children}</h1>
        </div>
    );
}

export default Header;
