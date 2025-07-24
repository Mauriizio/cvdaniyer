export default function Header() {
  return (
    <header className="bg-gray-900 overflow-x-hidden 
 ">
      <nav className="container mx-auto flex justify-between items-center px-8 py-2 ">
        <h1 className="text-xl font-bold">Mi Logo</h1>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:text-blue-400">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}
