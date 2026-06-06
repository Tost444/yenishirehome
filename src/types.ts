export type LangType = 'tr' | 'en' | 'de' | 'ru';

export interface AppRouteLocation {
  id: string;
  title: Record<LangType, string>;
  description: Record<LangType, string[]>;
  mapLink?: string;
  images: string[];
}

export interface AppRoute {
  id: string;
  label: Record<LangType, string>;
  title: Record<LangType, string>;
  intro?: Record<LangType, string[]>;
  locations: AppRouteLocation[];
}

