export const statusSentMessage = {
  waiting: 1,
  sent: 2,
  received: 3,
  watched: 4,
};

interface IMute {
  label: string;
  value: number;
}

export const muteTypes: IMute[] = [
  {
    label: "Mute message notifications",
    value: 1,
  },
  {
    label: "Mute call notifications",
    value: 2,
  },
  {
    label: "Mute message and call notifications",
    value: 3,
  },
];

export const muteTimes: IMute[] = [
  {
    label: "For 15 minutes",
    value: 1,
  },
  {
    label: "For 1 hour",
    value: 2,
  },
  {
    label: "For 8 hours",
    value: 3,
  },
  {
    label: "For 24 hours",
    value: 4,
  },
  {
    label: "Until I turn it back on",
    value: 5,
  },
];
