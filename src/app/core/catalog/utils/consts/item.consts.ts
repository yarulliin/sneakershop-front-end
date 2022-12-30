import { Sex, SexTranslated } from "../enums/item.enums";

export const SEX_ABBREVIATION_MAP = new Map()
  .set(Sex.MALE, 'М')
  .set(Sex.FEMALE, 'Ж');

export const SEX_MAP = new Map()
  .set(Sex.MALE, SexTranslated.MALE)
  .set(Sex.FEMALE, SexTranslated.FEMALE);

export const SEX_MAP_FOR_FILTER = new Map()
  .set(SexTranslated.MALE, Sex.MALE)
  .set(SexTranslated.FEMALE, Sex.FEMALE);
