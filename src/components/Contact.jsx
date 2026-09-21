export default function Contact() {
  return (
    <section id="contact" className="px-4 sm:px-8 py-16 sm:py-24 max-w-2xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Get In Touch</h2>
      <p className="text-gray-400 mb-8 text-sm sm:text-base">Feel free to reach out for collaborations or opportunities.</p>

      <div className="border border-white/10 rounded-xl p-6 sm:p-8 bg-white/5">
        <p className="mb-3 text-sm sm:text-base break-words">
          📧 <a href="mailto:kenasmathew123@gmail.com" className="text-accent hover:underline">kenasmathew123@gmail.com</a>
        </p>
        <p className="text-sm sm:text-base">
          📞 <a href="tel:+919961002568" className="text-accent hover:underline">+91 99610 02568</a>
        </p>
      </div>
    </section>
  );
}