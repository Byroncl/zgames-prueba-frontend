
export interface ApiResponse<T> {
  statusCode: number;
  status: string;
  message: ApiMessage;
  data: T;
}

export interface ApiData<T> {
  result: T;
  totalCount: number;
}

//hacer un archivo para los idiomas
export type LanguageCode = 'en' | 'es'; 

export type ApiMessage = string | { [key in LanguageCode]: string };
