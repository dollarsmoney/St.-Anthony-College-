import { Award, Target, Heart, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      <section className="relative h-96 flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://media.istockphoto.com/id/1409722748/photo/students-raising-hands-while-teacher-asking-them-questions-in-classroom.jpg?s=1024x1024&w=is&k=20&c=O8LmEkgurXoSDDC3BBqbGVODioeTuzHr5nRyt8p8io8=)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-200">Excellence in International Education Since 2005</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                St. Anthony College was established in 2005 with a vision to provide world-class international education in Johannesburg. From our humble beginnings with 50 students, we have grown into a thriving community of over 800 students from more than 30 countries.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our campus in Sandton offers state-of-the-art facilities spread across 15 acres, including modern classrooms, science laboratories, sports facilities, and creative arts studios.
              </p>
              <p className="text-lg text-gray-700">
                We are proud to be accredited by the International Baccalaureate Organization and Cambridge Assessment International Education, ensuring our students receive globally recognized qualifications.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://cdn.pixabay.com/photo/2013/04/19/01/15/university-105709_1280.jpg"
                alt="School campus"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: <Award size={40} />, title: 'Mission', description: 'To nurture globally-minded students who excel academically, socially, and emotionally.' },
              { icon: <Target size={40} />, title: 'Vision', description: 'To be the leading international school in South Africa, recognized for excellence and innovation.' },
              { icon: <Heart size={40} />, title: 'Values', description: 'Integrity, respect, excellence, compassion, and lifelong learning.' },
              { icon: <Shield size={40} />, title: 'Commitment', description: 'Providing a safe, inclusive environment where every student can thrive.' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full text-emerald-700 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Sarah Thompson',
                role: 'Principal',
                image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
                bio: 'Ed.D. from Harvard, 20+ years in international education',
              },
              {
                name: 'Mr. David Chen',
                role: 'Deputy Principal',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
                bio: 'M.Ed. from Oxford, IB coordinator with 15 years experience',
              },
              {
                name: 'Ms. Amara Nkosi',
                role: 'Head of Admissions',
                image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
                bio: 'M.A. in Educational Leadership, passionate about student success',
              },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-emerald-700 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Accreditations & Memberships</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'International Baccalaureate (IB)',
              'Cambridge Assessment',
              'Council of International Schools (CIS)',
              'South African Council for English Education (SACEE)',
            ].map((accreditation, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow"
              >
                <p className="font-semibold text-gray-800">{accreditation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
