const Header = ({children, darkMode}) => {
    return (
        <div className={`text-4xl py-3 mx-3 md:my-3 md:mx-0 invert drop-shadow-xl flex justify-between`}>
            <h1 className={darkMode ? "text-neutral-800 font-black" : "text-white font-black"}>{children}</h1>
        </div>
    );
}

export default Header;
