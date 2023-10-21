const ButtonTop = ({darkMode}) => {
    const scrollTop = (e)=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }
    return (
       <a className="absolute right-0 mx-3 dark-mode hover:shadow-lg border rounded-lg" onClick={e =>scrollTop(e)} title='dark mode'>
              <div className={`top icon-dark-mode`}></div>
        </a>
    );
}

export default ButtonTop;
