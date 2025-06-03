interface info {
  periodLength: number;
  trainingDays: number;
  targetValue: number;
  average: number;
  ratingDescription: string;
  success: boolean;
}

const calculateExercises = (
  dailyExercises: Array<number>,
  targetAmount: number
) => {
  const average =
    dailyExercises.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    ) / dailyExercises.length;
  const info: info = {
    periodLength: dailyExercises.length,
    trainingDays: dailyExercises.filter((num) => num != 0).length,
    targetValue: targetAmount,
    average: average,
    ratingDescription: "",
    success: targetAmount <= average,
  };

  if (info.average < targetAmount) {
    info.ratingDescription = "not too bad but could be better";
  } else if (info.average >= targetAmount) {
    info.ratingDescription = "good job";
  }

  return info;
};

export default calculateExercises;
