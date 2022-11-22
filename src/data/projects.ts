type Event = {
  date: number;
  title: string;
};

export type Project = {
  name: string;
  ignoreInList?: boolean;
  fullName?: string;
  type: string;
  active: [number, number][];
  color: string;
  events?: Event[];
  description?: string;

  links: {
    label: string;
    url: string;
  }[];
};
