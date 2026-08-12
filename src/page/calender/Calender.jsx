import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { formatDate } from "@fullcalendar/core";

import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

import "./calender.css";

let eventGuid = 0;

function createEventId() {
  return String(eventGuid++);
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b> <i>{eventInfo.event.title}</i>
    </>
  );
}

function renderSidebarEvent(event) {
  return (
    <li key={event.id}>
      <b>
        {formatDate(event.start, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </b>{" "}
      <i>{event.title}</i>
    </li>
  );
}

export default function Calender() {
  const [weekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);

  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem("calendarEvents");

    if (saved) {
      const parsed = JSON.parse(saved);

      // حتى ما تتكرر الـ IDs
      eventGuid = parsed.length;

      return parsed;
    }

    return [
      {
        id: createEventId(),
        title: "Demo Event",
        start: new Date().toISOString(),
        allDay: true,
      },
    ];
  });

  // حفظ دائم في Local Storage
  useEffect(() => {
    localStorage.setItem("calendarEvents", JSON.stringify(events));
  }, [events]);

  // إضافة حدث
  const handleDateSelect = (selectInfo) => {
    const title = prompt("Please enter event title");

    selectInfo.view.calendar.unselect();

    if (!title) return;

    setEvents((prev) => [
      ...prev,
      {
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      },
    ]);
  };

  // حذف حدث
  const handleEventClick = (clickInfo) => {
    if (
      window.confirm(
        `Delete "${clickInfo.event.title}" ?`
      )
    ) {
      setEvents((prev) =>
        prev.filter((event) => event.id !== clickInfo.event.id)
      );
    }
  };

  // تحديث عند السحب أو تغيير الحجم
  const updateEvent = (changeInfo) => {
    const updatedEvent = {
      id: changeInfo.event.id,
      title: changeInfo.event.title,
      start: changeInfo.event.start
        ? changeInfo.event.start.toISOString()
        : null,
      end: changeInfo.event.end
        ? changeInfo.event.end.toISOString()
        : null,
      allDay: changeInfo.event.allDay,
    };

    setEvents((prev) =>
      prev.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
  };

  // تعديل اسم الحدث (دبل كليك)
  const handleEventDidMount = (info) => {
    info.el.addEventListener("dblclick", () => {
      const newTitle = prompt(
        "Edit event title",
        info.event.title
      );

      if (!newTitle) return;

      setEvents((prev) =>
        prev.map((event) =>
          event.id === info.event.id
            ? { ...event, title: newTitle }
            : event
        )
      );
    });
  };

  const handleEvents = (events) => {
    setCurrentEvents(events);
  };

  return (
    <Stack
      direction="row"
      sx={{
        width: "100%",
        gap: 2,
      }}
    >
      <Paper
        sx={{ paddingTop: 2, width: 250 }}
        className="demo-app-sidebar"
      >
        <h2 style={{ textAlign: "center" }}>
          All Events ({currentEvents.length})
        </h2>

        <ul>{currentEvents.map(renderSidebarEvent)}</ul>
      </Paper>

      <div style={{ flex: 1 }}>
        <FullCalendar
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
          ]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          height="auto"
          events={events}
          select={handleDateSelect}
          eventClick={handleEventClick}
          eventDrop={updateEvent}
          eventResize={updateEvent}
          eventDidMount={handleEventDidMount}
          eventContent={renderEventContent}
          eventsSet={handleEvents}
        />
      </div>
    </Stack>
  );
}