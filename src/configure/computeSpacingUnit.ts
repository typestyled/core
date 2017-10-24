/*!
 * Copyright © 2017 The Typestyled Authors. Licensed under the MIT license.
 * See LICENSE.txt in the project root for complete license information.
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

/**
 * Computes the rounded spacing unit for the factored baseline grid.
 */
export const computeSpacingUnit = curry2(function computeSpacingUnit(
  baselineGrid: PixelLength,
  factor: NonnegativeRealNumber
): PixelLength {
  return pipe(parseFloat, multiply(factor), Math.round, px)(baselineGrid) as PixelLength
})
