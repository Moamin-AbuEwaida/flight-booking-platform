import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Info from "./components/info/Info";
import Lounge from "./components/lounge/Lounge";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import Subscribers from "./components/subscribers/Subscribers";
import Support from "./components/support/Support";
import Travelers from "./components/travelers/Travelers";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscribers />
      <Footer />
    </div>
  );
}

export default App;
