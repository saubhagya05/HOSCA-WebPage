import { MagicCard } from '@/components/magicui/magic-card'
import { ImagesSlider } from '@/components/ui/images-slider'
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
    date: 'February 15-17, 2024',
    description: 'Anwesha is the Annual Techno-Cultural festival of the Indian Institute of Technology Patna. Anwesha, the quest for grandeur, opulence, creativity and perfection, since its inception in 2010 has turned out to be one of east India\'s biggest and most awaited youth festivals, witnessing participation from all over the country. The previous editions have been a memorable experience to the crowd, with an escalating footfall every year.',
    images: [
      { src: '/events/anwesha/unnamed (13).jpg', width: 800, height: 600, quality: 75 },
      { src: '/events/anwesha/unnamed (9).png', width: 800, height: 600, quality: 75 },
      { src: '/events/anwesha/b.jpg', width: 800, height: 600, quality: 75 },
    ],
    location: 'IIT Patna Campus',
    category: 'upcoming',
    isImageLeft: true
  },
  {
    id: 2,
    title: 'Reverberance',
    date: 'October 20, 2023',
    description: 'Diwali is one among those festivals which is most awaited at IIT Patna. To mark and celebrate the festive spirit of Diwali, House of Socio-Cultural Affairs and House of Literature and Fine Arts presents Reverberance, the Inter-Year Cultural Tournament.',
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
    date: 'August 5, 2023',
    description: 'The annual freshers welcome party, where new students are introduced to the vibrant cultural life of IIT Patna. A night filled with performances, games, and cultural activities.',
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
        <ImagesSlider
          images={event.images.map(img => img.src)}
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
        </ImagesSlider>
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
    <div className="min-h-screen w-full bg-gray-50">
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