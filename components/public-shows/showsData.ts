export interface Show {
  id: string;
  date: number;
  month: string;
  city: string;
  venue: string;
  time: string;
  ticketUrl?: string;
  backgroundImage?: string;
}

export const SHOWS: Show[] = [
  {
    id: "1",
    date: 25,
    month: "July",
    city: "Bangalore",
    venue: "Meenakshi Rangamancha Auditorium",
    time: "6:00 PM",
    backgroundImage: "/public-shows background image/public-shows background image1.webp",
    ticketUrl: "https://in.bookmyshow.com/events/the-matricks-magic-and-mentalism-show-of-aakarsh/ET00502303",
  },
  // {
  //   id: "2",
  //   date: 22,
  //   month: "FEB",
  //   city: "Hyderabad",
  //   venue: "Vyoma Artspace",
  //   time: "7:00 PM onwards",
  //   backgroundImage: "/public-shows background image/public-shows background image2.webp",
  // },
  // {
  //   id: "3",
  //   date: 21,
  //   month: "APR",
  //   city: "Mumbai",
  //   venue: "xyz center",
  //   time: "7:00 PM onwards",
  //   backgroundImage: "/public-shows background image/public-shows background image3.webp",
  // },
];

