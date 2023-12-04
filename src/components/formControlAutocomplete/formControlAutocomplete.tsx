import { ChangeEvent, FC, useState } from "react";
import cn from "classnames";
import { FormControlProps } from "../../model";

import { useAppSelector } from "../../store/hooks";

export const FormControlAutoComplete: FC<FormControlProps> = ({
  id,
  form,
  title,
  required,
  errors,
  register,
  setValue,
}) => {
  const [filteredCountries, setFilteredCountries] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const countries = useAppSelector((state) => state.countries);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (setValue) setValue(id, value);

    const filtered = countries.filter((country) =>
      country.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredCountries(filtered);
  };

  const handleSelectCountry = (country: string) => {
    if (setValue) setValue(id, country);
    setIsVisible(false);
  };

  const closeDropdown = () => {
    setIsVisible(false);
  };

  const openDropdown = (e: ChangeEvent, countries: string[]) => {
    setIsVisible(true);
    setFilteredCountries(countries);
  };

  return (
    <>
      <div className="formField">
        <label htmlFor={id}>{title}</label>
        <div className="autocomplete__container">
          <input
            className="formField__input"
            form={form}
            required={required}
            onFocus={(e) => openDropdown(e, countries)}
            {...register(id)}
            onInput={handleInputChange}
            onBlur={closeDropdown}
          />
          <ul className={cn("dropdown", { hidden: !isVisible })}>
            {!filteredCountries.length && (
              <li className="placeholder">Not found</li>
            )}
            {filteredCountries.map((country, index) => (
              <li
                key={index}
                value={country}
                onClick={() => {
                  handleSelectCountry(country);
                }}
              >
                {country}
              </li>
            ))}
          </ul>
        </div>
        <div className="error__message">
          {errors && errors[id] && <span>{errors[id]?.message}</span>}
        </div>
      </div>
    </>
  );
};
