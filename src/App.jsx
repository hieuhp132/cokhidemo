import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AquariumNavbar from "./components/CoolNavbar";
import AquariumNavbar1 from "./components/NavBarCool";
import Home from "./pages/Home";
import "./App.css";
import Scene3D from "./components/Scene3D";

import ProductGrid from "./components/product/ProductGrid";

import MainLayout from "./components/layout/MainLayout";
import Hero3D from "./components/hero/Hero3d";
import Section from "./components/ui/Section";
import ValueProps from "./components/marketing/ValueProps";
import Industries from "./components/marketing/Industries";
import Trust from "./components/marketing/Trust";
import CTA from "./components/marketing/CTA";

export default function App() {
  return (
    <MainLayout>
      <Hero3D />
      <ValueProps />
      <ProductGrid />
      <Industries />
      <Trust />
      <CTA />
    </MainLayout>
  );
}




// import CadViewer from "./components/cad/CadViewer";


// function App() {
//   return (
//     <>
//       {/* <Navbar /> */}
//       <AquariumNavbar/>

//       {/* <AquariumNavbar1/> */}
//       <Home />
//       <Header /> 
//       <AquariumNavbar/>
    
    
//       {/* 3d Part */}
//       <CadViewer />
//       <AquariumNavbar/>
    
    
//     </>
//   );
// }

// export default App;
