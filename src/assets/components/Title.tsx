const setLight = () => {
    document.body.setAttribute("data-theme", "light");
  };
  const setDark = () => {
    document.body.setAttribute("data-theme", "dark");
  };
 function toggleTheme(e: any) {
    if (e.target.checked) setDark();
    else setLight();
  }  
export const Title =()=>{
    return(
        <div className="content">
          <div className="image">
            <img src="download.png" />
          </div>
          <div className="title">
            <h1 className="main-title">GitHub Searcher</h1>
            <p className="title-description">
              Search users and repositories below
            </p>
          </div>
          <div className="toggle-btn">
            <label className="switch">
              <input type="checkbox" onChange={toggleTheme} />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
    )
}