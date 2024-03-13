import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const RotaDeProtecao: React.FC<{ children: React.ReactNode }> = () => {
  const router = useRouter();

  const sair = () => {
    localStorage.removeItem("token");
    router.push("/login/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login/login");
    }
  }, []);

  return (
    <div>
      <Link href={"./login/login"}>
        <button onClick={sair}>Sair</button>
      </Link>
      
    </div>
  );
};

export default RotaDeProtecao;
