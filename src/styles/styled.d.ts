import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      foreground: string;
      light_dark: string;
      menu: string;
      menu_active_tab: string;
      tooltip: string;
    };
  }
}