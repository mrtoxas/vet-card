import React from 'react';
import { useThemeContext } from '../../theme/theme';
import { Mode } from '../../theme/types';

export const ThemeSwitcher: React.FC = () => {
  const { themeMode, changeMode } = useThemeContext();

  const toggleMode = () => {
    changeMode(themeMode === Mode.Light ? Mode.Dark : Mode.Light);
  };

  return (
    <button type="button" onClick={toggleMode}>
      Toggle Mode
    </button>
  );
};
