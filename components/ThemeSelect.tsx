'use client';
import React from 'react';
import { themes, ThemeName } from '@/src/theme';
import { useTheme } from './ThemeProvider';

export default function ThemeSelect() {
  const { themeName, setThemeName } = useTheme();
  return (
    <label className="flex items-center gap-2 text-xs">
      <span>Theme</span>
      <select
        className="rounded-xl border p-1"
        value={themeName}
        onChange={e => setThemeName(e.target.value as ThemeName)}
      >
        {Object.entries(themes).map(([k, v]) => (
          <option key={k} value={k}>
            {v.name}
          </option>
        ))}
      </select>
    </label>
  );
}
