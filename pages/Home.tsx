import { Link } from 'react-router-dom';
import { GraduationCap, Users, Globe, Award, BookOpen, Lightbulb } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/8926551/pexels-photo-8926551.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-900/80"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Welcome to St. Anthony College
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-gray-200">
            Nurturing Excellence, Inspiring Tomorrow's Leaders in Johannesburg
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book-tour"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
            >
              Book a Tour
            </Link>
            <Link
              to="/admissions"
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose St. Anthony College?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer world-class international education in the heart of Johannesburg, preparing students for global success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <GraduationCap size={40} />,
                title: 'Academic Excellence',
                description: 'International curriculum with IB Diploma Programme and Cambridge pathways.',
              },
              {
                icon: <Users size={40} />,
                title: 'Small Class Sizes',
                description: 'Personalized attention with a student-teacher ratio of 12:1.',
              },
              {
                icon: <Globe size={40} />,
                title: 'Global Perspective',
                description: 'Diverse community with students from over 30 countries.',
              },
              {
                icon: <Award size={40} />,
                title: 'Excellence in Sports',
                description: 'State-of-the-art facilities for athletics, swimming, and team sports.',
              },
              {
                icon: <BookOpen size={40} />,
                title: 'Modern Facilities',
                description: 'Technology-integrated classrooms, science labs, and creative arts studios.',
              },
              {
                icon: <Lightbulb size={40} />,
                title: 'Holistic Development',
                description: 'Focus on academic, social, emotional, and physical growth.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="text-emerald-700 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                About St. Anthony College
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Founded in 2005, St. Anthony College has established itself as one of Johannesburg's premier international schools. We provide a nurturing environment where students from diverse backgrounds come together to learn, grow, and excel.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our experienced faculty, state-of-the-art facilities, and comprehensive curriculum prepare students for success at top universities worldwide.
              </p>
              <Link
                to="/about"
                className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-md font-semibold transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://cdn.pixabay.com/photo/2015/12/15/06/42/merry-christmas-1093758_1280.jpg"
                alt="Students learning"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Programs</h2>
            <p className="text-lg text-emerald-100 max-w-3xl mx-auto">
              From preschool to IB Diploma, we offer comprehensive educational programs for all ages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Preschool',
                age: 'Ages 3-5',
                description: 'Play-based learning in a safe, nurturing environment.',
                image: 'https://images.pexels.com/photos/8612991/pexels-photo-8612991.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Primary School',
                age: 'Grades 1-7',
                description: 'Building strong foundations in core subjects with creative exploration.',
                image: 'https://images.pexels.com/photos/8923128/pexels-photo-8923128.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Secondary School',
                age: 'Grades 8-12',
                description: 'IB Diploma Programme and Cambridge IGCSE pathways.',
                image: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
            ].map((program, index) => (
              <div
                key={index}
                className="bg-white text-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                  <p className="text-emerald-700 font-semibold mb-3">{program.age}</p>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <Link
                    to="/programs"
                    className="text-emerald-700 font-semibold hover:text-emerald-800"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience our campus firsthand. Book a personalized tour and discover what makes St. Anthony College special.
          </p>
          <Link
            to="/book-tour"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-md font-semibold text-lg transition-colors"
          >
            Schedule Your Visit Today
          </Link>
        </div>
      </section>
    </div>
  );
}
