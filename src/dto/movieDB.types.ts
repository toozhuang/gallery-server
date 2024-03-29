// Generated by https://quicktype.io

export type Movie = {
  createTime: string;
  movies: Database[];
  version: VersionRecords[];
};

export type TimeRecords = {
  id: string;
  time: string;
};

export type VersionRecords = {
  id: string;
  version: number;
};

export type Database = {
  id: string;
  title: string;
  originaltitle: string;
  sorttitle: string;
  epbookmark: string;
  year: number;
  ratings: Ratings;
  userrating: number;
  top250: number;
  set: string;
  plot: string;
  outline: string;
  tagline: string;
  runtime: number;
  thumb: string[];
  fanart: Fanart;
  mpaa: string;
  certification: string;
  tmdbid: number;
  tmdbCollectionId: string;
  uniqueid: Array<number | string>;
  country: string;
  status: string;
  code: string;
  premiered: string;
  watched: boolean;
  playcount: string;
  lastplayed: string;
  genre: string;
  studio: string[];
  credits: string[];
  director: string;
  tag: string[];
  actor: Actor[];
  producer: Actor[];
  trailer: string;
  languages: string;
  dateadded: string;
  fileinfo: Fileinfo;
  source: string;
  edition: string;
  original_filename: string;
  user_note: string;
  location: string;
};

export type Actor = {
  name: string;
  role: string;
  thumb: string;
  profile?: string;
};

export type Fanart = {
  thumb: string;
};

export type Fileinfo = {
  streamdetails: Streamdetails;
};

export type Streamdetails = {
  video: Video;
  audio: Audio[];
  subtitle: Subtitle[];
};

export type Audio = {
  codec: string;
  language: string;
  channels: number;
};

export type Subtitle = {
  language: string;
};

export type Video = {
  codec: string;
  aspect: number;
  width: number;
  height: number;
  durationinseconds: number;
  stereomode: string;
};

export type Ratings = {
  rating: Rating[];
};

export type Rating = {
  value: number;
  votes: number;
};
