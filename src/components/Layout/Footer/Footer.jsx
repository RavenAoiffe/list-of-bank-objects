const Footer = ({darkMode}) => {
    return (
        <div className="py-4 w-full text-center text-1md ">
            <p className={darkMode ? "text-white border-top" : "border-top"}>-2023-</p>
        </div>
    );
}

export default Footer;
