import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
<<<<<<< HEAD
import { routesDeveloper } from "./routes/routesDeveloper";
=======
import { routeDeveloper } from "./routes/routesDeveloper";
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
import { StoreProvider } from "./store/StoreContext";

function App() {
  const queryClient = new QueryClient();
<<<<<<< HEAD
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <Router>
            <Routes>
              <Route path="*" element=<>page not found.</> />
              {routesDeveloper.map(({ ...routesProps }, key) => {
                return <Route key={key} {...routesProps} />;
              })}
            </Routes>
          </Router>
        </StoreProvider>
      </QueryClientProvider>
    </>
=======

  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Router>
          <Routes>
            <Route path="*" element={<>page not found.</>} />

            {routeDeveloper.map(({ ...routesProps }, key) => {
              return <Route key={key} {...routesProps} />;
            })}
          </Routes>
        </Router>
      </StoreProvider>
    </QueryClientProvider>
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
  );
}

export default App;
