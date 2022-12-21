"use strict";

$(function () {
  // Acceptance Criteria: When I view the time blocks for that day, then each time block is color-coded to indicate whether it is in the past, present, or future
  $(".time-block").each(function () {
    const currentHour = dayjs().format("HH"); // 09-17
    const time = $(this).attr("id").split("-")[1]; // Array ["hour", "##"]
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
  $(".saveBtn").on("click", function () {
    const key = $(this).parent().attr("id").split("-")[1];
    const value = $(this).parent().find(".description").val();
    localStorage.setItem(key, value);
    if (value === "") {
      localStorage.removeItem(key, value);
    }
    $("#localStorageMessage")
      .html("Appointment added to <span>localStorage</span> ✔️")
      .show("fast")
      .delay(3000)
      .hide("fast");
  });

  // Acceptance Criteria: When I open the planner, then the current day is displayed at the top of the calendar
  function displayTime() {
    const currentDate = dayjs().format("dddd, MMMM D, YYYY"); // Tuesday, December 20, 2022
    $("#currentDay").text(currentDate);
  }
  displayTime();
});
