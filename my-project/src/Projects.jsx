export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map(num => (
            <div key={num} className="bg-white shadow rounded-lg overflow-hidden">
              <img src="https://via.placeholder.com/400x200" alt="Project" className="w-full" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Project {num}</h3>
                <p className="text-gray-600 mt-2">
                  Brief description of project {num}. Built with React, Tailwind, and more.
                </p>
                <a href="#" className="inline-block mt-4 text-blue-500 hover:underline">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
