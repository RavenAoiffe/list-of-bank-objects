const Header = ({children, darkMode}) => {
    return (
        <div className="text-4xl py-3 mx-3 md:mt-3 md:mx-0 invert drop-shadow-xl flex justify-between mb-16">
            <h1 className={darkMode ? "md:text-left text-center text-neutral-800 font-black" : "md:text-left text-center text-white font-black"}>{children}</h1>
        </div>
    );
}

export default Header;
