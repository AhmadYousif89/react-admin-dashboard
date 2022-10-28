import { useState } from 'react';
import '@fullcalendar/react/dist/vdom';
import FullCalendar, { formatDate } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

import { Heading } from '../components/layout/heading';

interface CalendarEvent {
  id: string;
  title: string;
  start: string;
}

export const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState<CalendarEvent[]>([]);

  const onDateClickHandler = (selected: any) => {
    const title = prompt('Enter New Event Title');
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title: title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const onEventClickHandler = (selected: any) => {
    const confirm = window.confirm(
      `Are you sure you want to delete the event '${selected.event.title}'`
    );
    if (confirm) selected.event.remove();
  };

  return (
    <section>
      <Heading title="bar charts" subTitle="your latest analytics" />

      <div className="grid grid-cols-[minmax(min-content,20rem),1fr] gap-12">
        <div className="h-[75vh] overflow-auto rounded-md bg-sideMenu  p-4">
          <h3 className="mt-4 mb-8 text-center text-3xl capitalize text-base-color">
            events
          </h3>
          <ul className="flex flex-col gap-8">
            {currentEvents.map(event => (
              <li
                key={event.id}
                className="cursor-default rounded-sm border-b-2 border-indigo-400 bg-base-color p-4 text-2xl">
                <p className="text-base-color hover:text-highlight">
                  Title : {event.title}
                </p>
                <p className="text-base-color hover:text-highlight">
                  Date :{' '}
                  {formatDate(event.start, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-xl text-base-color">
          <FullCalendar
            height="75vh"
            eventBackgroundColor="var(--text-highlight)"
            eventTextColor="var(--text-color)"
            eventColor="green"
            plugins={[
              listPlugin,
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
            ]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
            }}
            initialView="dayGridMonth"
            editable
            selectable
            selectMirror
            dayMaxEvents
            select={onDateClickHandler}
            eventClick={onEventClickHandler}
            eventsSet={(events: any) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: '12315',
                title: 'First event',
                date: new Date().toJSON(),
              },
              {
                id: '5123',
                title: 'Second event',
                date: '2023-01-01',
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};
