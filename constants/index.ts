export const MAX_VIDEO_SIZE = 500 * 1024 * 1024;
export const MAX_THUMBNAIL_SIZE = 10 * 1024 * 1024;

export const BUNNY = {
  STREAM_BASE_URL: "https://video.bunnycdn.com/library",
  STORAGE_BASE_URL: "https://sg.storage.bunnycdn.com/snapcast",
  CDN_URL: "https://snapcast.b-cdn.net",
  EMBED_URL: "https://iframe.mediadelivery.net/embed",
  TRANSCRIPT_URL: "https://vz-47a08e64-84d.b-cdn.net",
};

export const emojis = ["😂", "😍", "👍"];

export const filterOptions = [
  "Most Viewed",
  "Most Recent",
  "Oldest First",
  "Least Viewed",
];

export const visibilities: Visibility[] = ["public", "private"];

export const ICONS = {
  record: "/assets/icons/record.svg",
  close: "/assets/icons/close.svg",
  upload: "/assets/icons/upload.svg",
};

export const initialVideoState = {
  isLoaded: false,
  hasIncrementedView: false,
  isProcessing: true,
  processingProgress: 0,
};

export const infos = ["transcript", "metadata"];

export const DEFAULT_VIDEO_CONFIG = {
  width: { ideal: 1920 },
  height: { ideal: 1080 },
  frameRate: { ideal: 30 },
};

export const DEFAULT_RECORDING_CONFIG = {
  mimeType: "video/webm;codecs=vp9,opus",
  audioBitsPerSecond: 128000,
  videoBitsPerSecond: 2500000,
};

export const dummyCards = [
  {
    id: "1",
    title: "Video Title",
    thumbnail: "/assets/samples/thumbnail (1).png",
    createdAt:  new Date("2025-06-22") ,
    userImg: "/assets/images/jason.png",
    userName: "Tarang",
    views: 1000,
    visibility: "public",
    duration: 160,
  },
  {
    id: "2",
    title: "React Tutorial",
    thumbnail: "/assets/samples/thumbnail (2).png",
    createdAt: new Date("2025-06-20"),
    userImg: "/assets/images/alex.png",
    userName: "Alex",
    views: 850,
    visibility: "private",
    duration: 210,
  },
  {
    id: "3",
    title: "Travel Vlog: Japan",
    thumbnail: "/assets/samples/thumbnail (3).png",
    createdAt: new Date("2025-06-18"),
    userImg: "/assets/images/sarah.png",
    userName: "Sarah",
    views: 1200,
    visibility: "public",
    duration: 300,
  },
  {
    id: "4",
    title: "Cooking Pasta",
    thumbnail: "/assets/samples/thumbnail (4).png",
    createdAt: new Date("2025-06-15"),
    userImg: "/assets/images/jessica.png",
    userName: "Jessica",
    views: 430,
    visibility: "public",
    duration: 95,
  },
  {
    id: "5",
    title: "Guitar Cover: Classic Hits",
    thumbnail: "/assets/samples/thumbnail (5).png",
    createdAt: new Date("2025-06-10"),
    userImg: "/assets/images/michael.png",
    userName: "Michael",
    views: 670,
    visibility: "private",
    duration: 180,
  },
  {
    id: "6",
    title: "Fitness Routine",
    thumbnail: "/assets/samples/thumbnail (6).png",
    createdAt: new Date("2025-06-08"),
    userImg: "/assets/images/lisa.png",
    userName: "Lisa",
    views: 980,
    visibility: "public",
    duration: 220,
  },
  {
    id: "7",
    title: "Art Time-lapse",
    thumbnail: "/assets/samples/thumbnail (7).png",
    createdAt: new Date("2025-06-05"),
    userImg: "/assets/images/david.png",
    userName: "David",
    views: 540,
    visibility: "public",
    duration: 140,
  },
  {
    id: "8",
    title: "Science Explained",
    thumbnail: "/assets/samples/thumbnail (8).png",
    createdAt: new Date("2025-06-01"),
    userImg: "/assets/images/emily.png",
    userName: "Emily",
    views: 1100,
    visibility: "private",
    duration: 260,
  }
]