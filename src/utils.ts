
export const shufferArray = (array:any[]) => {
  return  [...array].sort(()=>Math.random() - 0.5)
};
