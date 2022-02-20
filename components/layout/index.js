import Footer from "./footer";
import Header from "./header";
import Scroller from "./scroller";
import { useRouter } from "next/router"

const Layout = ({children}) => {
  const router = useRouter();

    return(
      <>
        <Header />
        {children}
        <Scroller />
        <Footer />
      </>
    )


  // if(router.pathname == "/"){
  //   return (
  //     <div>
  //       <Header />
  //       {children}
  //       <Footer />
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <Header />
  //       {children}
  //       <Scroller />
  //       <Footer />
  //     </div>
  //   );
  // }
}
 
export default Layout;