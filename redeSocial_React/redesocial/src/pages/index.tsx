import Asides from "@/components/Asides";
import Topo from "../components/Header";
import Footer from "@/components/Footer";
export default function Home() {

  return (
    <main>
      <div>
        <Topo></Topo>
      </div>
      <div>
      <Asides>
      </Asides>
      </div>
    <Footer/>
    </main>
  );
}

