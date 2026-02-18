export const JSON_HEADERS = {
  "Content-Type": "application/json",
};

export const extractErrorMessage = (error: unknown, fallback: string) => {
  const maybeError = error as {
    response?: {
      data?: {
        error?: string;
      };
    };
    message?: string;
  };

  return maybeError.response?.data?.error || maybeError.message || fallback;
};
