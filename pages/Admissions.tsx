import { Link } from 'react-router-dom';
import { FileText, Calendar, Users, CheckCircle, Clock, DollarSign } from 'lucide-react';

export default function Admissions() {
  return (
    <div className="bg-white">
      <section className="relative h-96 flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://cdn.pixabay.com/photo/2015/12/15/06/42/merry-christmas-1093758_1280.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Admissions</h1>
          <p className="text-xl text-gray-200">Join Our Community of Learners</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Admissions Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We welcome applications throughout the year and make the admission process as smooth as possible for families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Calendar size={32} />,
                title: '1. Schedule a Visit',
                description: 'Book a campus tour to experience our facilities and meet our team.',
              },
              {
                icon: <FileText size={32} />,
                title: '2. Submit Application',
                description: 'Complete the online application form with required documents.',
              },
              {
                icon: <Users size={32} />,
                title: '3. Assessment',
                description: 'Students participate in age-appropriate assessments.',
              },
              {
                icon: <CheckCircle size={32} />,
                title: '4. Review Process',
                description: 'Our admissions team reviews all applications carefully.',
              },
              {
                icon: <Clock size={32} />,
                title: '5. Decision',
                description: 'Receive admission decision within 2 weeks.',
              },
              {
                icon: <DollarSign size={32} />,
                title: '6. Enrollment',
                description: 'Complete enrollment and welcome to St. Anthony College!',
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-emerald-700 mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-emerald-50 border-l-4 border-emerald-700 p-6 mb-16">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Application Deadlines</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>First Term (January):</strong> Applications due November 30</li>
              <li><strong>Second Term (April):</strong> Applications due February 28</li>
              <li><strong>Third Term (July):</strong> Applications due May 31</li>
              <li><strong>Fourth Term (October):</strong> Applications due August 31</li>
            </ul>
            <p className="text-sm text-gray-600 mt-4">
              Note: Late applications may be considered based on space availability.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Required Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">For All Applicants</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-emerald-700 flex-shrink-0 mt-1" />
                  <span>Completed application form</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-emerald-700 flex-shrink-0 mt-1" />
                  <span>Birth certificate copy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-emerald-700 flex-shrink-0 mt-1" />
                  <span>Passport-size photographs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-emerald-700 flex-shrink-0 mt-1" />
                  <span>Immunization records</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-emerald-700 flex-shrink-0 mt-1" />
                  <span>Previous school records</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Documents</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-emerald-700 flex-shrink-0 mt-1" />
                  <span>Teacher recommendation letters (Grades 6+)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-emerald-700 flex-shrink-0 mt-1" />
                  <span>English proficiency test (if applicable)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-emerald-700 flex-shrink-0 mt-1" />
                  <span>Special needs assessment (if applicable)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-emerald-700 flex-shrink-0 mt-1" />
                  <span>Parent/guardian identification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Tuition & Fees (2026)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                level: 'Preschool',
                age: 'Ages 3-5',
                annual: 'R 95,000',
                includes: ['Full-day program', 'Meals included', 'Learning materials'],
              },
              {
                level: 'Primary School',
                age: 'Grades 1-7',
                annual: 'R 145,000',
                includes: ['Cambridge curriculum', 'After-school programs', 'Sports activities'],
              },
              {
                level: 'Secondary School',
                age: 'Grades 8-12',
                annual: 'R 175,000',
                includes: ['IB Diploma option', 'University counseling', 'Leadership programs'],
              },
            ].map((tier, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-emerald-700 hover:shadow-xl transition-all"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.level}</h3>
                <p className="text-emerald-700 font-semibold mb-4">{tier.age}</p>
                <p className="text-3xl font-bold text-gray-900 mb-6">{tier.annual}</p>
                <ul className="space-y-3">
                  {tier.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <CheckCircle size={20} className="text-emerald-700 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-amber-50 border border-amber-200 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Aid Available</h3>
            <p className="text-gray-700 mb-4">
              We offer need-based financial aid and merit scholarships to qualified students. Approximately 20% of our students receive some form of financial assistance.
            </p>
            <Link to="/contact" className="text-emerald-700 font-semibold hover:text-emerald-800">
              Contact us to learn more about financial aid →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Apply?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Start your journey with St. Anthony College today. Book a tour or begin your application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book-tour"
              className="bg-white text-emerald-700 hover:bg-gray-100 px-8 py-4 rounded-md font-semibold text-lg transition-colors"
            >
              Book a Campus Tour
            </Link>
            <Link
              to="/contact"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
            >
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
