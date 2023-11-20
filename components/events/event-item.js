import Link from 'next/link';

import classes from './event-item.module.css';

function EventItem (props) {
  const { id, title, location, date, image } = props;
  
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const humanReadableDate = (new Date(date)).toLocaleString("en-US", dateOptions);
  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={'/' + image} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
      </div>
      <div>
        <Link href={exploreLink}>Explore Event</Link>
      </div>
    </li>
  );
}

export default EventItem;