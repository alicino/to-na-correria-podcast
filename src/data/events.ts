export interface RaceEvent {
  name: string;
  distance: string;
  date: string;
  dateISO: string;
  location: string;
  url: string;
}

export const events: RaceEvent[] = [
  {
    name: 'Cap10k',
    distance: '10km',
    date: '12 de Abril de 2026',
    dateISO: '2026-04-12',
    location: 'Austin, TX',
    url: 'https://www.cap10k.com/',
  },
  {
    name: 'Run for the Water',
    distance: '10 milhas (16km)',
    date: '8 de Novembro de 2026',
    dateISO: '2026-11-08',
    location: 'Austin, TX',
    url: 'https://www.runforthewater.com/',
  },
  {
    name: 'Spurs Austin International Half',
    distance: 'Meia Maratona',
    date: '17 de Janeiro de 2027',
    dateISO: '2027-01-17',
    location: 'Austin, TX',
    url: 'https://downhilltodowntown.com/',
  },
  {
    name: 'Austin Marathon',
    distance: 'Maratona + Meia Maratona',
    date: '14 de Fevereiro de 2027',
    dateISO: '2027-02-14',
    location: 'Austin, TX',
    url: 'https://youraustinmarathon.com/',
  },
];
