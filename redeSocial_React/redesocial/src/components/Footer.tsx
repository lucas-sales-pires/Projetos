export default function Footer() {
    return (
        <div className="flex items-center justify-center w-full h-[150px] bg-black text-white">
            <footer className="flex flex-col items-center">
                <p>&copy; 2024 - Todos os direitos reservados</p>
                <p>Entre em contato pelo e-mail: lucas2013sales@hotmail.com</p>
                <nav className="mt-4">
                    <ul className="flex space-x-4">
                        <li><a href="#" className="text-white">Termos de uso</a></li>
                        <li><a href="#" className="text-white">Política de privacidade</a></li>
                        <li><a href="#" className="text-white">Sobre nós</a></li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
}
