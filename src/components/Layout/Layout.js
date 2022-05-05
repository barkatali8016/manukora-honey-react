import classes from "./Layout.module.css";
import Announcement from "../UI/Announcement/Announcement";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import ProductsList from "../ProductsList/ProductsList";
const Layout = (props) => {
  return (
    <>
      <Announcement />
      <Header />
      <Hero />
      <ProductsList />
    </>
  );
};
export default Layout;
