export enum MuscleGroupEnum {
  BICEPS = 'biceps',
  TRICEPS = 'triceps',
}

type MuscleGroup = keyof typeof MuscleGroupEnum;

export default MuscleGroup;
