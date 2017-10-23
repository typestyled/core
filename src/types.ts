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
  readonly fontSize: NonnegativeRealNumberPixel
  readonly lineHeight: NonnegativeRealNumberPixel
  readonly baselineGrid: NonnegativeIntegerPixel
  readonly piSpacingUnit: NonnegativeIntegerPixel
  readonly omicronSpacingUnit: NonnegativeIntegerPixel
}

export type NonnegativeRealNumberPixel = NonnegativeRealNumber

export type NonnegativeIntegerPixel = NonnegativeInteger

export type NonnegativeRealNumber = number

export type NonnegativeInteger = number

export type Settings = {
  readonly fontSize?: NonnegativeIntegerPixel
  readonly baselineGrid?: NonnegativeIntegerPixel
  readonly piSpacingUnitFactor?: NonnegativeRealNumber
}
