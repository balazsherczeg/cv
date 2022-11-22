type Event = {
  date: number;
  title: string;
};

export type Work = {
  name: string;
  fullName?: string;
  type: string;
  active: [number, number][];
  color: string;
  events?: Event[];
  description?: string;

  forget?: boolean;
  url?: string;
  position: string;
};
