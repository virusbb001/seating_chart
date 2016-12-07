export default {
 personal_quiz: Array.from({length: 28}).map((d,i)=>({
  name: `名前(${i})`,
  quiz: `クイズ(${i})`,
 })),
};
