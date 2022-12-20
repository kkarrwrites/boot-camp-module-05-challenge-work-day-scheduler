"use strict";

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  ///////////////////////////////////////////////////////////////////////////////////
  // Variable selectors
  const currentDayEl = $("#currentDay");
  const timeBlockEl = $(".time-block");
  const saveButtonEl = $(".saveBtn");

  // Other variables
  const currentHour = dayjs().format("HH"); // 09-17

  // Acceptance Criteria: When I view the time blocks for that day, then each time block is color-coded to indicate whether it is in the past, present, or future
  $(timeBlockEl).each(function () {
    let time = $(this).attr("id").split("-")[1]; // Array ["hour", "##"]
    if (time < currentHour) {
      $(this).addClass("past");
    } else if (time === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  // Acceptance Criteria: When I click into a time block, then I can enter an event
  // Acceptance Criteria: When I click the save button for that time block, then the text for that event is saved in local storage
  // Acceptance Criteria: When I refresh the page, then the saved events persist
  saveButtonEl.on("click", function () {
    let key = $(this).parent().attr("id").split("-")[1];
    let value = $(this).parent().find(".description").val();
    localStorage.setItem(key, value);
  });

  // Acceptance Criteria: When I open the planner, then the current day is displayed at the top of the calendar
  function displayTime() {
    const currentDate = dayjs().format("dddd, MMMM D, YYYY"); // Tuesday, December 20, 2022
    currentDayEl.text(currentDate);
  }

  displayTime();
});
