import React from 'react';
import locales from '../../UIsrc/components/ConfigProvider/locales';

interface LangSwitcherProps {
  value: string;
  onChange: (lang: string) => void;
}

export const LangSwitcher = ({ value, onChange }: LangSwitcherProps) => (
  <select
    value={value}
    onChange={(e) => {
      onChange(e.target.value);
    }}
  >
    {Object.keys(locales).map((t) => (
      <option value={t} key={t}>
        {t}
      </option>
    ))}
  </select>
);
