interface AppLayout {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

interface PosterProps {
  id?: number;
  title: string;
  url: string;
  release_date?: string;
}

interface NavLayout {
  children: React.ReactNode;
}
