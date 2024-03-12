export const compareChanges = (
  oldData: { [key: string]: unknown },
  newData: { [key: string]: unknown },
) => {
  const changes = {} as { [key: string]: unknown };
  for (const key in oldData) {
    if (oldData[key] !== newData[key]) {
      changes[key] = newData[key];
    }
  }
  return changes;
};
