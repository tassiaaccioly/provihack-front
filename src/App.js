//dependências
import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Router Components
import AuthRouter from "./routecomponents/auth/AuthRouter";
import ChallengesRouter from "./routecomponents/challenges/ChallengesRouter";

//Temas
import { ThemeProvider } from "styled-components";
import db from "./assets/theme.json";

//Global Style
import { GlobalStyle } from "./styles/globalStyles";

//contexts
import { AuthContextComponent } from "./contexts/authContext";

//componentes
import ScrollReload from "./components/ScrollReload";
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  const theme = db.theme;

  const [modal, setModal] = useState(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <ScrollReload>
            <AuthContextComponent>
              <NavBar modal={modal} setModal={setModal} />
              <div style={{ marginTop: "8rem", marginBottom: "15rem" }}>
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={(routeProps) => {
                      return (
                        <Homepage
                          {...routeProps}
                          modal={modal}
                          setModal={setModal}
                        />
                      );
                    }}
                  />

                  {/* Routers */}
                  <Route
                    exact
                    path="/auth"
                    render={(routeProps) => {
                      return (
                        <AuthRouter
                          {...routeProps}
                          modal={modal}
                          setModal={setModal}
                        />
                      );
                    }}
                  />
                  <Route
                    exact
                    path="/challenges"
                    render={(routeProps) => {
                      return (
                        <ChallengesRouter
                          {...routeProps}
                          modal={modal}
                          setModal={setModal}
                        />
                      );
                    }}
                  />

                  <Route path="/about" component={About} />
                </Switch>
              </div>
              <Footer />
            </AuthContextComponent>
          </ScrollReload>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
