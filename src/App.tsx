import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import { GlobalStyle } from "./style/globalStyle";
import { FirstPlayer } from "./pages/FirstPlayer";
import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { SecondPlayer } from "./pages/SecondPlayer";
import { ThirdPlayer } from "./pages/ThirdPlayer";
import { Results } from "./pages/Results";
import { useAppSelector } from "./store/hooks";

const App: FC = () => {
  const GlobalStyleProxy: any = GlobalStyle;
  const playersNumbers = useAppSelector(state => state.game.playersNumbers);

  const routes = [
    { path: '/', element: <Navigate replace to="/player1" /> },
    { path: '/player1', element: <FirstPlayer /> },
    { path: '/player2', element: playersNumbers[0] > -1 ? <SecondPlayer /> : <Navigate replace to="/player1" /> },
    { path: '/player3', element: playersNumbers[1] > -1 ? <ThirdPlayer /> : <Navigate replace to="/player2" /> },
    { path: '/results', element: playersNumbers[2] > -1 ? <Results /> : <Navigate replace to="/player3" /> },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
      <GlobalStyleProxy />
    </ThemeProvider>
  );
};

export default App
