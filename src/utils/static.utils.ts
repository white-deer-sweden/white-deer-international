import { Prettify } from '.';

export const withId = <T>(
  statics: T[],
): Prettify<
  {
    id: string;
  } & T
>[] => {
  return statics.map((s) => ({
    ...s,
    id: Math.random().toString(36).slice(2, 9),
  }));
};
