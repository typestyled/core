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

import { PixelCount } from '../types'

export function computeLineHeight(baselineGrid: PixelCount, fontSize: PixelCount): PixelCount {
  let lineHeight: PixelCount = baselineGrid

  while (lineHeight <= fontSize) lineHeight += baselineGrid

  return lineHeight
}
