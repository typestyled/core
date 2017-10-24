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

import { NonnegativeRealNumber, PixelLength } from '../types'
import { curry2, pipe } from '@typed/functions'

import { multiply } from '@typed/math'
import { px } from 'csx/lib'

export const computeSpacingUnit = curry2(function computeSpacingUnit(
  baselineGrid: PixelLength,
  factor: NonnegativeRealNumber
): PixelLength {
  return pipe(parseFloat, multiply(factor), Math.round, px)(baselineGrid) as PixelLength
})
