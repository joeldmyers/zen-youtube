// put modules imported without type information here. E.g. --

// declare module "youtube-api-search";

interface Video {
  id: {
    videoId: string;
  };
  etag: number;
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
      };
    };
  };
}
