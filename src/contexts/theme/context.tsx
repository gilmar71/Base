import { ThemeProvider as ThemeStyledComponents } from 'styled-components';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeStyledComponents
      theme={{
        primaryColor: '#0069dc',
        secondaryColor: '#2bbb47',
        tertiaryColor: '#002777',
        textColor: '#fff',
      }}
    >
      {children}
    </ThemeStyledComponents>
  );
}
