// function onClick(){

//         keyElement.addEventListener("click", () => {
//             this.properties.value += "\n";
//             this._triggerEvent("oninput");
//         });

//         break;
// }


const routes = {
    '/' : home,
    '/directory_search' : directory_search,
    '/calendar' : calendar
  };
  
  const rootDiv = document.getElementById('root');
  rootDiv.innerHTML = routes[window.location.pathname];
  
  const onNavigate = (pathname) => {
    window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname
    )
    rootDiv.innerHTML = routes[pathname]
  }
  
  window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname]
  }