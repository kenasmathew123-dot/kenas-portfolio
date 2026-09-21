export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-5 bg-bg/80 backdrop-blur z-50">
      <span className="font-bold text-lg">Kenas Mathew A</span>
      <div className="flex gap-8 text-sm">
        <a href="#expertise" className="hover:text-accent">Expertise</a>
        <a href="#about" className="hover:text-accent">About</a>
        <a href="#projects" className="hover:text-accent">Projects</a>
        <a href="#contact" className="hover:text-accent">Contact</a>
      </div>
    </nav>
  );
}