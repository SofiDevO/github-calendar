import { useState } from 'react';
import { Tooltip as MuiTooltip } from '@mui/material';
import GitHubCalendar from 'react-github-calendar';
import YearButton from '../components/YearButton';

const Calendar = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [activeButton, setActiveButton] = useState(new Date().getFullYear());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const handleYearButtonClick = (year) => {
    setSelectedYear(year);
    setActiveButton(year);
  };

  return (
    <>
      <div className="calendar__container">
        <GitHubCalendar
          username="SofiDev"
          year={selectedYear}
          weekStart={1}
          theme={{
            light: ["hsl(0, 0%, 92%)", "rebeccapurple"],
            dark: ["hsl(0, 0%, 22%)", "hsla(276, 100%, 45%, 1)"],
          }}
          renderBlock={(block, activity) => (
            <MuiTooltip
              title={`${activity.count} activities on ${activity.date}`}
            >
              {block}
            </MuiTooltip>
          )}
        />
      </div>
      <div className="year__buttons">
      {[currentYear , currentYear -1, currentYear -2].map((year) => (
          <YearButton
            key={year}
            year={year}
            currentYear={selectedYear}
            onClick={() => handleYearButtonClick(year)}
            className={activeButton === year ? "is-active" : ""}
          />
        ))}
      </div>
    </>
  );
};

export default Calendar;
