/*!
 * Copyright © 2017 The Typestyled Authors. Licensed under the MIT license.
 * See LICENSE.txt in the project root for complete license information.
 *
 * File:    computeLineHeight.ts
 *
 * Authors: Frederik Krautwald <fkrautwald@gmail.com>
 * Date:    October 23, 2017
 *
 * Description:
 *
 * This file provides functionality to compute line height.
 */

import { PixelLength } from '../types'
import { curry2 } from '@typed/functions'
import { px } from 'csx/lib'

/**
 * Computes the baseline-grid-aligned line height for the given font size.
 */
export const computeLineHeight = curry2(function computeLineHeight(
  baselineGrid: PixelLength,
  fontSize: PixelLength
): PixelLength {
  const unitlessBaselineGrid = parseFloat(baselineGrid)
  const unitlessFontSize = parseFloat(fontSize)

  let unitlessLineHeight = unitlessBaselineGrid

  while (unitlessLineHeight <= unitlessFontSize) unitlessLineHeight += unitlessBaselineGrid

  return px(unitlessLineHeight) as PixelLength
})
