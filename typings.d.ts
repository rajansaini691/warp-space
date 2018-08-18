declare module '*.css' {
    interface IClassNames {
      [className: string]: string
    }
    export const classNames: IClassNames;
  }
  