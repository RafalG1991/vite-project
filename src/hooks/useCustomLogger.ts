export const useCustomLogger = (prefix: string) => {
  const log = (what: string) => {
    console.log(`${prefix} - ${what}`);
  }

  return {
    log,
  }
}