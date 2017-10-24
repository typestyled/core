/*!
 * Copyright © 2017 The Typestyled Authors. All rights reserved.
 *
 * File:    types.ts
 *
 * Authors: Frederik Krautwald <fkrautwald@gmail.com>
 * Date:    October 23, 2017
 *
 * Description:
 *
 * This file provides core types.
 */

export type Configuration = {
  readonly fontSize: NonnegativeRealNumberPixelLength
  readonly lineHeight: NonnegativeRealNumberPixelLength
  readonly baselineGrid: NonnegativeIntegerPixelLength
  readonly piSpacingUnit: NonnegativeIntegerPixelLength
  readonly omicronSpacingUnit: NonnegativeIntegerPixelLength
  readonly xiSpacingUnit: NonnegativeIntegerPixelLength
  readonly nuSpacingUnit: NonnegativeIntegerPixelLength
  readonly muSpacingUnit: NonnegativeIntegerPixelLength
  readonly lambdaSpacingUnit: NonnegativeIntegerPixelLength
}

export type NonnegativeRealNumberPixelLength = NonnegativeRealNumber

export type NonnegativeIntegerPixelLength = NonnegativeInteger

export type NonnegativeRealNumber = number

export type NonnegativeInteger = number

export type Settings = {
  readonly fontSize?: NonnegativeRealNumberPixelLength
  readonly baselineGrid?: NonnegativeIntegerPixelLength
  readonly piSpacingUnitFactor?: NonnegativeRealNumber
  readonly omicronSpacingUnitFactor?: NonnegativeRealNumber
  readonly xiSpacingUnitFactor?: NonnegativeRealNumber
  readonly nuSpacingUnitFactor?: NonnegativeRealNumber
  readonly muSpacingUnitFactor?: NonnegativeRealNumber
  readonly lambdaSpacingUnitFactor?: NonnegativeRealNumber
}
