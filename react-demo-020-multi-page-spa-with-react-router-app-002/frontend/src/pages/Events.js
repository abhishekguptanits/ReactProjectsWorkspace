import { Await, defer, json, useLoaderData } from "react-router-dom"; // closest loader data

import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  // const events = useLoaderData();
  const data = useLoaderData();
  /* if(data.isError) {
    return <p>{data.message}</p>
  } */
  /* const events = data.events;
  return <EventsList events={events} />; */
  return (
    <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
      <Await resolve={data.events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // return {isError: true, message: 'Could not fetch events.'}
    // throw new Error('Could not fetch events.');
    /* throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: 500,
    }); */
    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    /* const resData = await response.json();
    return resData.events; */
    const resData = await response.json();
    return resData.events;
  }
}

export function loader() {
  return defer({
    events: loadEvents(),
  });
}
