import "./App.css";
import Footer from "./components/common/Footer";

import Header from "./components/common/Header";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
