const Header = ({children, darkMode}) => {
    return (
        <div className="md:text-3xl text-2xl mx-3 md:mt-3 md:px-4 py-1 invert drop-shadow-xl flex md:justify-start justify-center items-center gap-2 md:mb-20 border-bottom">
            <div className="bank-logo"></div>
            <h1 className={darkMode ? "md:text-left text-center text-neutral-800 font-black" : "md:text-left text-center text-white font-black"}>{children}</h1>
        </div>
    );
}

export default Header;
