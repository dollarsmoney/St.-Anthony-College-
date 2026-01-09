import { BookOpen, Palette, Music, Trophy, Globe, Microscope } from 'lucide-react';

export default function Programs() {
  return (
    <div className="bg-white">
      <section className="relative h-96 flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Our Programs</h1>
          <p className="text-xl text-gray-200">Comprehensive Education from Preschool to IB Diploma</p>
        </div>
      </section>

      <section id="preschool" className="py-16 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full font-semibold mb-4">
                Ages 3-5
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Preschool Program</h2>
              <p className="text-lg text-gray-700 mb-4">
                Our preschool program provides a nurturing, play-based learning environment where young children develop social, emotional, and cognitive skills through exploration and creativity.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <BookOpen className="text-emerald-700 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Early Literacy & Numeracy</h4>
                    <p className="text-gray-600">Building foundations in reading, writing, and mathematics</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Palette className="text-emerald-700 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Creative Arts</h4>
                    <p className="text-gray-600">Art, music, and drama to foster creativity</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Trophy className="text-emerald-700 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Physical Development</h4>
                    <p className="text-gray-600">Outdoor play and motor skills activities</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/8612991/pexels-photo-8612991.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Preschool"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="primary" className="py-16 bg-gray-50 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://cdn.pixabay.com/photo/2015/12/15/06/42/merry-christmas-1093758_1280.jpg"
                alt="Primary School"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full font-semibold mb-4">
                Grades 1-7
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Primary School</h2>
              <p className="text-lg text-gray-700 mb-4">
                Our primary program follows the Cambridge Primary curriculum, providing a strong foundation in core subjects while encouraging curiosity, critical thinking, and global awareness.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <BookOpen className="text-emerald-700 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Core Subjects</h4>
                    <p className="text-gray-600">English, Mathematics, Science, Social Studies</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="text-emerald-700 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Languages</h4>
                    <p className="text-gray-600">French, Zulu, and Afrikaans options</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Music className="text-emerald-700 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Enrichment</h4>
                    <p className="text-gray-600">Technology, arts, music, and physical education</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="secondary" className="py-16 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full font-semibold mb-4">
                Grades 8-12
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Secondary School</h2>
              <p className="text-lg text-gray-700 mb-4">
                Our secondary program offers both Cambridge IGCSE and the IB Diploma Programme, preparing students for university success and global citizenship.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Microscope className="text-emerald-700 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Cambridge IGCSE (Grades 8-10)</h4>
                    <p className="text-gray-600">Internationally recognized qualifications across 20+ subjects</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="text-emerald-700 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">IB Diploma (Grades 11-12)</h4>
                    <p className="text-gray-600">World-class pre-university program accepted globally</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="text-emerald-700 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">University Counseling</h4>
                    <p className="text-gray-600">Dedicated support for university applications worldwide</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Secondary School"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="ib" className="py-16 bg-emerald-700 text-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">IB Diploma Programme</h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              The IB Diploma is recognized by universities worldwide as excellent preparation for higher education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Theory of Knowledge',
                description: 'Critical thinking and reflection on the nature of knowledge',
              },
              {
                title: 'Extended Essay',
                description: 'Independent research project of 4,000 words',
              },
              {
                title: 'Creativity, Activity, Service',
                description: 'Experiential learning through creative and service activities',
              },
              {
                title: 'Six Subject Groups',
                description: 'Language, sciences, mathematics, arts, and more',
              },
              {
                title: 'International Mindedness',
                description: 'Developing global awareness and intercultural understanding',
              },
              {
                title: 'University Recognition',
                description: 'Accepted by over 5,000 universities in 100+ countries',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-emerald-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Co-Curricular Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Trophy size={32} />, title: 'Sports', items: 'Football, Swimming, Athletics, Tennis, Basketball' },
              { icon: <Music size={32} />, title: 'Performing Arts', items: 'Choir, Orchestra, Drama, Dance' },
              { icon: <Palette size={32} />, title: 'Visual Arts', items: 'Painting, Sculpture, Photography, Design' },
              { icon: <Globe size={32} />, title: 'Clubs', items: 'Debate, Model UN, Robotics, Environmental Club' },
            ].map((activity, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full text-emerald-700 mb-4">
                  {activity.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{activity.title}</h3>
                <p className="text-gray-600">{activity.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
