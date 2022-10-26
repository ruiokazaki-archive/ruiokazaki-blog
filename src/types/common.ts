export type Page<T> = {
  page: {
    data: T[];
    start: number;
    end: number;
    size: number;
    total: number;
    currentPage: number;
    lastPage: number;
    url: {
      current: string;
      next?: string;
      prev?: string;
    };
  };
};
