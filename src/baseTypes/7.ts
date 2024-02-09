enum WeekDay {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: WeekDay): boolean {
  return day === WeekDay.Saturday || day === WeekDay.Sunday;
}

if (isWeekend(WeekDay.Monday)) {
  console.log("Сьогодні вихідний день");
} else {
  console.log("Сьогодні робочий день");
}