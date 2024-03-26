document.addEventListener('DOMContentLoaded', function () {

  var calendarEl = document.getElementById('calendar');
  const closebtn2 = document.getElementById('close_btn2')
  console.log(closebtn2)
  closebtn2.addEventListener("click", () => {
    const modal2 = document.getElementById('myModal2');
    const calender = document.getElementById('calendar');
    if (modal2.style.display == 'flex') {
      modal2.style.display = 'none';
      calender.style.filter = 'none';
    }
  })
  var calendarEl = document.getElementById('calendar');
  const closebtn3 = document.getElementById('close_btn3')
  console.log(closebtn3)
  closebtn3.addEventListener("click", () => {
    const event_edit = document.getElementById('event_editor');
    const calender = document.getElementById('calendar');
    if (event_edit.style.display == 'flex') {
      event_edit.style.display = 'none';
      calender.style.filter = 'none';
    }
  })
  var calendarEl = document.getElementById('calendar');
  const edit = document.getElementById('edit_btn')
  console.log(edit)
  edit.addEventListener("click", () => {
    const event_edit = document.getElementById('event_editor');
    const calender = document.getElementById('calendar');
    const modal2 = document.getElementById('myModal2');
    console.log(modal2)
    modal2.style.display = 'flex'
    event_edit.style.display = 'none';
    calender.style.filter = 'blur(3px)';
  }
  )
  var calendarEl = document.getElementById('calendar');
  const closebtn = document.getElementById('close_btn')
  console.log(closebtn)
  closebtn.addEventListener("click", () => {
    const modal = document.getElementById('myModal');
    const calender = document.getElementById('calendar');
    if (modal.style.display == 'flex') {
      modal.style.display = 'none';
      calender.style.filter = 'none';
    }
  })

  var calendar = new FullCalendar.Calendar(calendarEl, {
    selectable: true,
    select: function () {
      const modal = document.getElementById('myModal');
      const calender = document.getElementById('calendar');
      console.log(modal);
      modal.style.display = 'flex';
      calender.style.filter = 'blur(3px)';
    },

    initialView: 'dayGridMonth',
    initialDate: '2024-01-06',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,list'

    },

    events: [
      {
        type: 'Danger',
        title: 'Valentines',
        start: '2024-02-14T00:00:00',
        end: '2024-02-15',
        location: 'Accra',
        description: 'Stay away from valentines'
      },
      {
        title: 'Long Event',
        start: '2024-01-07',
        end: '2024-01-11'
      },
      {
        groupId: '5',
        title: 'Repeating Event',
        start: '2024-01-09T16:00:00'
      },
      {
        groupId: '5',
        title: 'Repeating Event',
        start: '2024-01-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2024-01-14',
        end: '2024-01-17'
      },
      {
        title: 'Meeting',
        start: '2024-01-03T10:30:00',
        end: '2024-01-03T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2024-01-03T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2024-01-06T14:30:00'
      },
      {
        title: 'Birthday Party',
        start: '2024-01-19T07:00:00'
      },
      {
        type: 'Danger',
        title: 'Click for Google',
        url: 'https://google.com/',
        start: '2024-01-28',
        end: '2024-02-15',
      },
    ],

    eventClick: function () {
      var calendar = document.getElementById('calendar');
      const event_edit = document.getElementById('event_editor');
      console.log(event_edit);
      event_edit.style.display = 'flex';
      calendar.style.filter = 'blur(3px)';
    }

  });
  calendar.render();

});
