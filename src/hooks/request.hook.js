export const useRequest = () => {
  const request = async (method = "GET", key, body) => {
    try {
      return await new Promise((resolve) => {
        switch (method) {
          case "GET":
            return resolve(JSON.parse(localStorage.getItem(key)));
          case "SET":
            return resolve(localStorage.setItem(key, JSON.stringify(body)));
        }
      });
    } catch (error) {
      throw error;
    }
  };

  return { request };
};
