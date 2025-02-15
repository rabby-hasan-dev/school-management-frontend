import { ChevronDownIcon } from "@heroicons/react/16/solid";


export default function Home() {
  return (
    <div>
      <div>
        {/* Navbar */}
        <nav className="bg-indigo-600 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <a href="#" className="text-white text-2xl font-bold">School Management</a>
            <div className="space-x-6">
              <a href="#about" className="text-white hover:text-indigo-200">About</a>
              <a href="#features" className="text-white hover:text-indigo-200">Features</a>
              <a href="#contact" className="text-white hover:text-indigo-200">Contact</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative bg-indigo-700 text-white py-20">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1564490612-004e4a2d61e4')" }}></div>
          <div className="container mx-auto relative z-10 text-center">
            <h1 className="text-5xl font-bold mb-4">Simplify Your School Management</h1>
            <p className="text-lg mb-6">A powerful platform to streamline administration, grade management, and student progress tracking.</p>
            <a href="#features" className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg">Explore Features</a>
            <div className="mt-10">
              <ChevronDownIcon className="w-8 h-8 text-white mx-auto animate-bounce" />

            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-indigo-600">About Our Platform</h2>
            <p className="text-xl text-gray-600 mt-6">Our School Management System is designed to make school operations smooth and efficient. From grade tracking to managing student data, it’s a one-stop solution for all your school’s administrative needs.</p>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-indigo-100">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-indigo-600">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-indigo-700">Student Management</h3>
                <p className="text-gray-600 mt-4">Easily manage student records, grades, and progress in real-time.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-indigo-700">Attendance Tracking</h3>
                <p className="text-gray-600 mt-4">Monitor and track attendance effortlessly with real-time reports.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-indigo-700">Grade Management</h3>
                <p className="text-gray-600 mt-4">Streamline grade recording and reporting for teachers and students.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-indigo-600 text-white py-6">
          <div className="container mx-auto text-center">
            <p>&copy; 2025 School Management System. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
