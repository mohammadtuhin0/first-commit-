import Skills from "./Skill";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            {/* Hero Section */}
            <section className="bg-white shadow py-16">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-blue-600">Hi, I’m Your Name</h1>
                    <p className="mt-4 text-lg text-gray-600">
                        A passionate React developer building modern and responsive web apps.
                    </p>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className=" bg-gray-100">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">Skills</h2>
                    <div className="bg-white shadow p-4 rounded-lg text-center font-medium">
                        <Skills></Skills>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">Education</h2>
                    <ul className="space-y-4">
                        <li className="bg-white shadow p-4 rounded-lg">
                            <h3 className="font-semibold">B.Sc in Computer Science</h3>
                            <p className="text-gray-600">Your University — 2019-2023</p>
                        </li>
                        <li className="bg-white shadow p-4 rounded-lg">
                            <h3 className="font-semibold">Higher Secondary School</h3>
                            <p className="text-gray-600">Your College — 2017-2019</p>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
