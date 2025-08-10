export default function Skills() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            <section className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold mb-6">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { name: "HTML", level: "Expert" },
                        { name: "CSS", level: "Expert" },
                        { name: "JavaScript", level: "Advanced" },
                        { name: "React", level: "Advanced" },
                        { name: "Tailwind CSS", level: "Advanced" },
                        { name: "Node.js", level: "Intermediate" },
                        { name: "Git", level: "Intermediate" },
                        { name: "Python", level: "Intermediate" }
                    ].map(skill => (
                        <div key={skill.name} className="bg-white shadow p-4 rounded-lg text-center">
                            <h3 className="font-semibold">{skill.name}</h3>
                            <p className="text-gray-600">{skill.level}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
