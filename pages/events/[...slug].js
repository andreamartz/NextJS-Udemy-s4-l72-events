import { useRouter } from "next/router";
// import { useEffect, useState } from 'react';

import ResultsTitle from "../../components/results-title/results-title";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert/error-alert.js";

function FilteredEventsPage() {
  const router = useRouter();

  const MINYEAR = 2021;
  const MAXYEAR = 2030;
  const MINMONTH = 1;
  const MAXMONTH = 12

  const filterData = router.query.slug;  // will be undefined when the page first renders

  // prevent error while filterData is undefined
  if (!filterData) {
    return (
      <p className='center'>Loading...</p>
    );
  }

  // pull off the year and month; if there are more segments to the url, ignore them
  const year = filterData[0];
  const month = filterData[1];

  // convert year and month to numbers
  const numYear = +year;
  const numMonth = +month;  // NOT zero-indexed
  const date = new Date(numYear, numMonth - 1);
  const isValidSearchData = !(isNaN(numYear) || isNaN(numMonth) || numYear < MINYEAR || numYear > MAXYEAR || numMonth < MINMONTH || numMonth > MAXMONTH);

  const filteredEvents = getFilteredEvents(year, month);
  const isValidFilteredEvents = filteredEvents && filteredEvents.length !== 0;
  console.log(isValidFilteredEvents, filteredEvents, filteredEvents.length);
  console.log(isValidSearchData, isValidSearchData);

  return (
    <div>
      <h1>Filtered Events Page</h1>
      {isValidSearchData && isValidFilteredEvents && <ResultsTitle date={date}/>}
      {isValidSearchData && isValidFilteredEvents ? 
        <EventList items={filteredEvents}/>
        : !isValidFilteredEvents ? <>
            <ErrorAlert>No events found for the chosen filter</ErrorAlert>
            <Button link='/events'>Show All Events</Button>
          </> 
          : <>
              <ErrorAlert>Invalid filter data; please adjust your values.</ErrorAlert>
              <Button link='/events'>Show All Events</Button>
            </>}
    </div>
  );
}

export default FilteredEventsPage;