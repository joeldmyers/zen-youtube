export interface Video {
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
