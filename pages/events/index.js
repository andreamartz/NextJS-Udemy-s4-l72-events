import { useRouter } from 'next/router';

import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/event-search';

function AllEventsPage() {
  const allEvents = getAllEvents();
  const router = useRouter();

  function navigateToFilteredEvents(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <>
      {/* filter form (EventsSearch goes here */}
        {/* pass an onSearch prop to EventSearch with the function to navigate to the appropriate url (slug page for filtered events) */}
      <EventSearch onSearch={navigateToFilteredEvents}/>

      <EventList items={allEvents} />
    </>
  );
}

export default AllEventsPage;