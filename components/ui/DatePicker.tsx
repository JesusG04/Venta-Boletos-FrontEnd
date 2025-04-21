"use client"
import { useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { es } from "date-fns/locale/es";
import { getYear, getMonth, format } from "date-fns";
import { range } from "lodash";
registerLocale("es", es);

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const MyDatePicker = ({ onChange }: Props) => {

  const [startDate, setStartDate] = useState<Date | null>(null);
  const years = range(1950, getYear(new Date()) + 1, 1);
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Deciembre",
  ];

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Solo después del montaje en cliente
    setStartDate(new Date());
  }, []);

  const handleChange = (date: Date | null) => {
    setStartDate(date);
    if (date) {
      const formattedDate = format(date, "yyyy-MM-dd");
      const fakeEvent = {
        target: {
          name: "fechaNacimiento",
          value: formattedDate,
        }
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      onChange(fakeEvent);
    }

  }

  return (
    <div>

      {!isClient ? (
        <div suppressHydrationWarning>Loading calendario...</div>
      ) : (
        <DatePicker
          locale="es"
          dateFormat="yyyy/MM/dd"
          name="fechaNacimiento"
          onChange={handleChange}
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
          }) => (
            <div
              className="d-flex justify-content-center m-2 gap-1"
            >
              <select
                value={getYear(date)}
                onChange={({ target: { value } }) => changeYear(Number(value))}
                className="datepickerSelect bodyfont"
              >
                {years.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <select
                value={months[getMonth(date)]}
                onChange={({ target: { value } }) =>
                  changeMonth(months.indexOf(value))
                }
                className="datepickerSelect bodyfont"
              >
                {months.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

            </div>
          )}
          selected={startDate}
        />

      )}
    </div>
  );
};

export default MyDatePicker;
