export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-8 pt-20">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-accent to-accent2 rounded-full blur-[120px] opacity-40"></div>
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-gradient-to-tr from-accent2 to-accent rounded-full blur-[100px] opacity-30"></div>

      <div className="relative z-10 flex items-center gap-8 max-w-4xl">
        <img
          src="/profile.jpg"
          alt="Kenas Mathew A"
          className="w-40 h-40 rounded-full object-cover grayscale border-4 border-white/10"
        />
        <div>
          <div className="flex gap-4 mb-3">
            <a href="https://github.com/kenasmathew123-dot" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/kenas-mathew-5bb533287/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <h1 className="text-5xl font-bold mb-2">Kenas Mathew A</h1>
          <p className="text-lg text-gray-300">
            Mechanical Engineering · Computational Engineering · Robotics · Quantum Technologies
          </p>
        </div>
      </div>
    </section>
  );
}