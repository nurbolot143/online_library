export const useRequest = () => {
  const request = async (method = "getItem", key, body) => {
    try {
      return await new Promise((resolve) => {
        switch (method) {
          case "GET":
            return resolve(localStorage.getItem(key));
          case "SET":
            return resolve(localStorage.getItem(key, body));
        }
      });
    } catch (error) {
      throw error;
    }
  };

  return { request };
};
