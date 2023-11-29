import { useRouter } from 'next/router';

import { getEventById } from '../../../dummy-data';
import EventSummary from '../../../components/event-detail/event-summary';
import EventLogistics from '../../../components/event-detail/event-logistics';
import EventContent from '../../../components/event-detail/event-content';
import ErrorAlert from '../../../components/ui/error-alert/error-alert';

function EventDetailPage() {
  const router = useRouter();
  const { eventId } = router.query;
  const event = getEventById(eventId);

  if (!event[0]) {
    return <ErrorAlert>No event found!</ErrorAlert>
  }

  const { title, description, date, location, image, imageAlt } = event[0];

  return (
    <>
      <h1>Event Detail Page</h1>
      <EventSummary title={title}/>
      <EventLogistics date={date} address={location} image={image} imageAlt={title}/>
      <EventContent>
        <p>{description}</p>
      </EventContent>
    </>
  );
}

export default EventDetailPage;