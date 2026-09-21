const projects = [
  { title: "QPSO for Green Fleet", desc: "Quantum-inspired Particle Swarm Optimization for sustainable fleet management.", tags: ["Python", "Optimization"] },
  { title: "OpenFOAM CFD Studies", desc: "Laminar, turbulent, and cavitation flow simulations.", tags: ["OpenFOAM", "CFD"] },
  { title: "MATLAB Drone Modelling", desc: "Mathematical and computational models of drone dynamics.", tags: ["MATLAB", "Simulink"] },
  { title: "Line-Following Robot", desc: "Autonomous robot with sensor integration and motor control.", tags: ["Arduino", "Embedded C"] },
  { title: "Robotic Arm", desc: "Mechanical design and servo-controlled actuation.", tags: ["Arduino", "Mechanical Design"] },
  { title: "Drishti — Cybercrime Reporting", desc: "Web platform concept built for a hackathon with the Cyber Department, Kerala.", tags: ["Web Dev", "Hackathon"] },
];

export default function Projects() {
  return (
    <section id="projects" className="px-4 sm:px-8 py-16 sm:py-24 max-w-5xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-10">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="border border-white/10 rounded-xl p-6 hover:border-accent transition">
            <h3 className="font-semibold text-base sm:text-lg mb-2">{p.title}</h3>
            <p className="text-xs sm:text-sm text-gray-400 mb-4">{p.desc}</p>
            <div className="flex gap-2 flex-wrap">
              {p.tags.map((t) => (
                <span key={t} className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}