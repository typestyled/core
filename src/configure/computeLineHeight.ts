/*!
 * Copyright © 2017 The Typestyled Authors. All rights reserved.
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
