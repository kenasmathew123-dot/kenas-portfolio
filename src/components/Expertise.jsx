const items = [
  { title: "Computational Engineering", desc: "Mathematical models, numerical methods, and simulation for engineering systems." },
  { title: "Computational Fluid Dynamics", desc: "OpenFOAM — laminar flow, turbulent flow, and cavitation." },
  { title: "Robotics & Automation", desc: "Arduino, sensors, motors, actuators, line-following robots, robotic arms, drones." },
  { title: "Quantum Technologies", desc: "Quantum mechanics, entanglement, computing, cryptography, and optimization." },
  { title: "AI & Machine Learning", desc: "ML for classification, prediction, optimization, and data-driven problems." },
  { title: "Engineering Design", desc: "CATIA, SolidWorks, Fusion 360, AutoCAD for mechanical design and modelling." },
];

export default function Expertise() {
  return (
    <section id="expertise" className="px-4 sm:px-8 py-16 sm:py-24 max-w-5xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-10">What I Work On</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.title} className="border border-white/10 rounded-xl p-6 hover:border-accent transition">
            <h3 className="font-semibold mb-2 text-sm sm:text-base">{item.title}</h3>
            <p className="text-xs sm:text-sm text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}