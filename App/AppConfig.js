//TODO: Use Axios to load settings from a URL at some point after installing redux or some other store.
import React, { createContext } from 'react';

const defaultConfig = {
  logoURL: "http://harpertasks.com/logo.svg",
  loadingURL: "http://harpertasks.com/Loading.svg",
  eotwVideoURL: "https://vimeo.com/389958716",  //https://www.youtube.com/watch?v=Z0GFRcFm-aY",
  bluVideoURL: "http://www.vimeo.com/392590844",
}

export const AppConfigContext = createContext({});

export default AppConfig = (props) => {

  return (
    <AppConfigContext.Consumer>
      {
        value => {
          return React.Children.map(props.children, ((child, i) => {
            return React.cloneElement(child, { appData: value });
          }))
        }
      }
    </AppConfigContext.Consumer>
  )
}

export const AppConfiguration = (props) => {




  return (
    <AppConfigContext.Provider value={defaultConfig} >
      {props.children}
    </AppConfigContext.Provider>
  );

}

