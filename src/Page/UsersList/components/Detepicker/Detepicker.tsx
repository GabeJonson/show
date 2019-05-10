import React, { useState } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export const Detepicker: React.FC = () => {
  const [focus, handleFocus] = useState(false);
  const [date, handleDate] = useState(moment());

  return (
    <SingleDatePicker
      id="datepicker"
      date={date}
      onDateChange={newDate => handleDate(newDate || moment())}
      focused={focus}
      onFocusChange={({ focused }) =>
        focused ? handleFocus(focused) : handleFocus(focused || false)
      }
      numberOfMonths={1}
      isOutsideRange={() => false}
      displayFormat="DD/MM/YYYY"
    />
  );
};
