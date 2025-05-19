import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";

export const App = () => {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <HomePage />
      </div>
    </>
  );
};
