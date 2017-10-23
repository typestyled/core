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

import {
  Configuration,
  NonnegativeIntegerPixelLength,
  NonnegativeRealNumber,
  NonnegativeRealNumberPixelLength,
  Settings,
} from '../types'

import { computeLineHeight } from './computeLineHeight'

const DEFAULT_FONT_SIZE: NonnegativeRealNumberPixelLength = 16
const DEFAULT_BASELINE_GRID: NonnegativeIntegerPixelLength = 8
const DEFAULT_PI_SPACING_UNIT_FACTOR: NonnegativeRealNumber = 0.25
const DEFAULT_OMICRON_SPACING_UNIT: NonnegativeIntegerPixelLength = 4

export function configure(
  {
    fontSize = DEFAULT_FONT_SIZE,
    baselineGrid = DEFAULT_BASELINE_GRID,
    piSpacingUnitFactor = DEFAULT_PI_SPACING_UNIT_FACTOR,
  }: Settings = {}
): Configuration {
  const lineHeight = computeLineHeight(baselineGrid, fontSize)
  const piSpacingUnit = Math.round(baselineGrid * piSpacingUnitFactor)

  return {
    fontSize,
    lineHeight,
    baselineGrid,
    piSpacingUnit,
    omicronSpacingUnit: DEFAULT_OMICRON_SPACING_UNIT,
  }
}
