//dependências
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Router Components
import AuthRouter from "./routecomponents/auth/AuthRouter";
import ChallengesRouter from "./routeComponents/challenges/ChallengesRouter";

//Temas
import { ThemeProvider } from "styled-components";
import db from "./assets/theme.json";

//Global Style
import { GlobalStyle } from "./styles/globalStyles";

//contexts
import { AuthContextComponent } from "../contexts/authContext";

//componentes
import ScrollReload from "./components/ScrollReload";
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage/Homepage";
import Footer from "./components/Footer/footer";

export default function App() {
  const theme = db.theme;
  return (
    <>
      <ScrollReload>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <BrowserRouter>
            <AuthContextComponent>
              <NavBar />
              <Switch>
                <Route exact path="/" component={Homepage} />
              </Switch>
              <Footer />
            </AuthContextComponent>
          </BrowserRouter>
        </ThemeProvider>
      </ScrollReload>
    </>
  );
}
