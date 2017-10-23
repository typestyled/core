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

import { NonnegativeIntegerPixelLength, NonnegativeRealNumberPixelLength } from '../types'

import { curry2 } from '@typed/functions'

export const computeLineHeight = curry2(function computeLineHeight(
  baselineGrid: NonnegativeIntegerPixelLength,
  fontSize: NonnegativeRealNumberPixelLength
): NonnegativeRealNumberPixelLength {
  let lineHeight: NonnegativeRealNumberPixelLength = baselineGrid

  while (lineHeight <= fontSize) lineHeight += baselineGrid

  return lineHeight
})
