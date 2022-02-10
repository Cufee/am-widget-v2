export interface ApiResponse {
  data?: any;
  error?: ApiError;
}
export interface ApiError {
  message: string;
  context?: string;
}
