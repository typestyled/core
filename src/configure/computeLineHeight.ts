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

import { NonnegativeIntegerPixel, NonnegativeRealNumberPixel } from '../types'

export function computeLineHeight(
  baselineGrid: NonnegativeIntegerPixel,
  fontSize: NonnegativeRealNumberPixel
): NonnegativeRealNumberPixel {
  let lineHeight: NonnegativeRealNumberPixel = baselineGrid

  while (lineHeight <= fontSize) lineHeight += baselineGrid

  return lineHeight
}
