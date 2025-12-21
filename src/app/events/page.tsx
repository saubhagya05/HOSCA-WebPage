import { MagicCard } from '@/components/magicui/magic-card'
import { OptimizedImagesSlider } from '@/components/ui/images-slider-optimized'
import { Suspense } from 'react'

interface EventImage {
  src: string;
  width: number;
  height: number;
  quality: number;
}

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  images: EventImage[];
  location?: string;
  category: 'upcoming' | 'past';
  isImageLeft?: boolean;
}

const events: Event[] = [
  {
    id: 1,
    title: 'Anwesha',
    date: 'February 7-9, 2025',
    description: 'Anwesha, the annual Techno-Cultural extravaganza of the Indian Institute of Technology Patna, is a celebration of innovation, artistry, and excellence. Since its inception in 2010, Anwesha has grown into one of the most anticipated youth festivals in East India, drawing vibrant participation from across the nation. With each passing year, it continues to surpass expectations, enchanting audiences with its grandeur and creativity, and setting new benchmarks in cultural and technical brilliance.',
    images: [
      { src: 'events/anwesha/IMG_20250208_223941.jpg', width: 800, height: 600, quality: 75 },
      { src: 'events/anwesha/IMG20250208185823.jpg', width: 800, height: 600, quality: 75 },
      { src: 'events/anwesha/IMG20250208225814.jpg', width: 800, height: 600, quality: 75 },
      { src: 'events/anwesha/IMG20250209210029.jpg', width: 800, height: 600, quality: 75 },
      { src: 'events/anwesha/b.jpg', width: 800, height: 600, quality: 75 },
    ],
    location: 'IIT Patna Campus',
    category: 'upcoming',
    isImageLeft: true
  },
  {
    id: 2,
    title: 'Reverberance',
    date: 'October 26-31, 2024',
    description: 'Diwali is one of the most eagerly awaited festivals at IIT Patna, celebrated with great enthusiasm and joy. Embracing the spirit of lights, tradition, and togetherness, the House of Socio-Cultural Affairs and the House of Literature and Fine Arts proudly present Reverberance — the Inter-Year Cultural Tournament that brings the campus alive with talent, passion, and festive fervor.',
    images: [
      { src: '/events/reverberance/45761428_1923729217747212_3862406545320968192_n.jpg', width: 800, height: 600, quality: 75 },
      { src: '/events/reverberance/1412367_616054415103208_2119809909_o.jpg', width: 800, height: 600, quality: 75 },
    ],
    location: 'IIT Patna Campus',
    category: 'past',
    isImageLeft: false
  },
  {
    id: 3,
    title: 'Nebula',
    date: 'August 25, 2024',
    description: 'The Annual Freshers’ Welcome Party at IIT Patna is a lively celebration that marks the beginning of a new chapter for incoming students. Designed to introduce them to the vibrant cultural fabric of the institute, the evening comes alive with captivating performances, interactive games, and spirited cultural activities—setting the perfect tone for their journey ahead.',
    images: [
      { src: '/events/nebula/_DSC7630.JPG', width: 800, height: 600, quality: 75 },
      { src: '/events/nebula/_DSC7649.JPG', width: 800, height: 600, quality: 75 },
      { src: '/events/nebula/_DSC7782.JPG', width: 800, height: 600, quality: 75 },
    ],
    location: 'IIT Patna Auditorium',
    category: 'past',
    isImageLeft: true
  },
];

const EventCard = ({ event }: { event: Event }) => {
  const imageSection = (
    <div className="w-full md:w-1/2 h-[400px] relative rounded-lg overflow-hidden shadow-4-strong">
      <Suspense fallback={<div className="w-full h-full bg-gray-800 animate-pulse" />}>
        <OptimizedImagesSlider
          images={event.images.map((img, index) => ({
            ...img,
            fetchPriority: index === 0 ? "high" : "auto",
            loading: index === 0 ? "eager" : "lazy",
            decoding: "async"
          }))}
          className="h-full w-full"
          overlay={true}
          overlayClassName="bg-gradient-to-t from-black/60 to-transparent"
          autoplay={true}
        >
          <div className="absolute bottom-0 left-0 p-4 text-white z-50">
            <p className="text-sm font-medium">{event.date}</p>
            {event.location && (
              <p className="text-sm opacity-80">{event.location}</p>
            )}
          </div>
        </OptimizedImagesSlider>
      </Suspense>
    </div>
  );

  const contentSection = (
    <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
      <h3 className="font-bold mb-4 text-3xl text-[#fa8a57] font-['Poppins']">{event.title}</h3>
      <p className="text-gray-700 text-lg font-['Open_Sans'] leading-relaxed">{event.description}</p>
    </div>
  );

  return (
    <MagicCard className="w-full bg-white rounded-xl shadow-2xl hover:shadow-4-strong transition-all duration-300 mb-16">
      <div className="flex flex-col md:flex-row">
        {event.isImageLeft ? (
          <>
            {imageSection}
            {contentSection}
          </>
        ) : (
          <>
            {contentSection}
            {imageSection}
          </>
        )}
      </div>
    </MagicCard>
  );
};

export default function EventsPage() {
  const upcomingEvents = events.filter(event => event.category === 'upcoming');
  const pastEvents = events.filter(event => event.category === 'past');

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-purple-900 to-red-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#fa8a57] font-['Poppins'] mt-20">
          Our Events
        </h1>
        
        {upcomingEvents.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-[#fa8a57] text-center">Upcoming Events</h2>
            <div className="space-y-8">
              {upcomingEvents.map((event) => (
                <Suspense key={event.id} fallback={<div className="h-[400px] bg-gray-200 rounded-xl animate-pulse" />}>
                  <EventCard event={event} />
                </Suspense>
              ))}
            </div>
          </section>
        )}
  
        {pastEvents.length > 0 && (
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-[#fa8a57] text-center">Past Events</h2>
            <div className="space-y-8">
              {pastEvents.map((event) => (
                <Suspense key={event.id} fallback={<div className="h-[400px] bg-gray-200 rounded-xl animate-pulse" />}>
                  <EventCard event={event} />
                </Suspense>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
} 