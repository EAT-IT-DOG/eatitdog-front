import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: string;
    subBackgroundColor: string;
    borderColor: string;
    contrast: string;
  }
}
