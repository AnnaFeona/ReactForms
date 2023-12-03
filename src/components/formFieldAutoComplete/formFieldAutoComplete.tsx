import React, { ChangeEvent, FC, useEffect, useState } from "react";
import cn from "classnames";
import { FormFieldProps } from "../../model";

import "./formFieldAutoComplete.scss";

const countries = ["England", "France", "Belarus"];

export const FormFieldAutoComplete: FC<FormFieldProps> = ({
  id,
  form,
  title,
  required,
  errors,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredCountries, setFilteredCountries] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    if (errors) {
      setErr(errors[id]);
    }
  }, [errors, id, err]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    const filtered = countries.filter((country) =>
      country.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredCountries(filtered);
  };

  const handleSelectCountry = (country: string) => {
    setInputValue(country);
    setIsVisible(false);
    // setFilteredCountries([]);
    console.log(country);
  };

  const closeDropdown = () => {
    setIsVisible(false);
  };

  const openDropdown = (countries: string[]) => {
    setFilteredCountries(countries);
    setIsVisible(true);
  };

  return (
    <>
      <div className="formField">
        <label htmlFor={id}>{title}</label>
        <div className="autocomplete__container">
          <input
            className="formField__input"
            form={form}
            name={id}
            required={required}
            value={inputValue}
            onChange={handleInputChange}
            onBlur={closeDropdown}
            onFocus={() => openDropdown(countries)}
            formNoValidate
          />
          <ul
            className={cn("dropdown", { hidden: !isVisible })}
            onClick={(e) => console.log(e.target)}
          >
            {!filteredCountries.length && <li className="placeholder">Not found</li>}
            {filteredCountries.map((country, index) => (
              <li
                key={index}
                onClick={() => {
                  handleSelectCountry(country);
                }}
              >
                {country}
              </li>
            ))}
          </ul>
        </div>
        <div className="error__message">{err && <span>{err}</span>}</div>
      </div>
    </>
  );
};
