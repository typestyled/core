/*!
 * Copyright © 2017 The Typestyled Authors. All rights reserved.
 *
 * File:    configure.ts
 *
 * Authors: Frederik Krautwald <fkrautwald@gmail.com>
 * Date:    October 23, 2017
 *
 * Description:
 *
 * This file provides the configuration function.
 */

import { Configuration, PixelCount, Settings } from '../types'

import { computeLineHeight } from './computeLineHeight'

const DEFAULT_FONT_SIZE: PixelCount = 16
const DEFAULT_BASELINE_GRID: PixelCount = 8

export function configure(
  { fontSize = DEFAULT_FONT_SIZE, baselineGrid = DEFAULT_BASELINE_GRID }: Settings = {}
): Configuration {
  const lineHeight = computeLineHeight(baselineGrid, fontSize)

  return {
    fontSize,
    lineHeight,
    baselineGrid,
  }
}
