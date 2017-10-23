/*!
 * Copyright © 2017 The Typestyled Authors. All rights reserved.
 *
 * File:    computeSpacingUnit.ts
 *
 * Authors: Frederik Krautwald <fkrautwald@gmail.com>
 * Date:    October 24, 2017
 *
 * Description:
 *
 * This file provides functionality to compute spacing units.
 */

import { NonnegativeIntegerPixelLength, NonnegativeRealNumber } from '../types'

import { curry2 } from '@typed/functions'

export const computeSpacingUnit = curry2(function computeSpacingUnit(
  baselineGrid: NonnegativeIntegerPixelLength,
  factor: NonnegativeRealNumber
): NonnegativeIntegerPixelLength {
  return Math.round(baselineGrid * factor)
})
