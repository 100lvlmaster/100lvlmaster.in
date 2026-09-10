import { useEffect, useState } from "react";

const START_DATE = new Date(2021, 3, 1);

export interface ExperienceDuration {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const EMPTY: ExperienceDuration = {
  years: 0,
  months: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

function diff(start: Date, end: Date): ExperienceDuration {
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();
  let hours = end.getHours() - start.getHours();
  let minutes = end.getMinutes() - start.getMinutes();
  let seconds = end.getSeconds() - start.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes -= 1;
  }
  if (minutes < 0) {
    minutes += 60;
    hours -= 1;
  }
  if (hours < 0) {
    hours += 24;
    days -= 1;
  }
  if (days < 0) {
    const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
    days += prevMonth.getDate();
    months -= 1;
  }
  if (months < 0) {
    months += 12;
    years -= 1;
  }

  return { years, months, days, hours, minutes, seconds };
}

export function useExperience(): ExperienceDuration {
  const [duration, setDuration] = useState<ExperienceDuration>(EMPTY);

  useEffect(() => {
    setDuration(diff(START_DATE, new Date()));
    const id = setInterval(() => {
      setDuration(diff(START_DATE, new Date()));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return duration;
}
