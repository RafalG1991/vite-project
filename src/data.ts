const elements: string[] = [];
const subscribers = new Set();
export const dataStore = {
  getElements: () => {
    return elements;
  },

  subscribe: (callback: () => void) => {
    subscribers.add(callback);
    return () => {
      subscribers.delete(callback);
    }
  }
}