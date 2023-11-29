import Button from '../ui/button';
// import { getFilteredEvents } from '../../dummy-data';
import classes from './event-search.module.css';

import { useRef } from 'react';
import { useRouter } from 'next/router';

function EventSearch(props) {
  // const router = useRouter();
  const { onSearch } = props;

  // Max used useRef instead of two-way binding with useState, because we are only interested in the values of month and year once (i.e., at the time the form is submitted)
  const selectedYearRef = useRef();
  const selectedMonthRef = useRef();

  // navigate to the Filtered Events page
  // better form(?) to have handleSubmit pull off the month and year from the form inputs and submit a search for the array of filtered events
  function handleSubmit(event) {
    event.preventDefault();
    // get form input data
    const year = selectedYearRef.current.value;
    const month = selectedMonthRef.current.value.padStart(2, '0');

    // navigate to filtered events page
    onSearch(year, month);
 }

  return (
    <form action="" className={classes.form}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select name="year" id="year" ref={selectedYearRef}>
            <option value="">--Please choose an option--</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select name="month" id="month" ref={selectedMonthRef}>
            <option value="">--Please choose an option--</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button onClick={handleSubmit}>Find Events</Button>
    </form>
  );
}

export default EventSearch;