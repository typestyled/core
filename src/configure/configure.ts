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
import { computeSpacingUnit } from './computeSpacingUnit'

const DEFAULT_FONT_SIZE: NonnegativeRealNumberPixelLength = 16
const DEFAULT_BASELINE_GRID: NonnegativeIntegerPixelLength = 8
const DEFAULT_PI_SPACING_UNIT_FACTOR: NonnegativeRealNumber = 0.25
const DEFAULT_OMICRON_SPACING_UNIT_FACTOR: NonnegativeRealNumber = 0.5
const DEFAULT_XI_SPACING_UNIT_FACTOR: NonnegativeRealNumber = 1

export function configure(
  {
    fontSize = DEFAULT_FONT_SIZE,
    baselineGrid = DEFAULT_BASELINE_GRID,
    piSpacingUnitFactor = DEFAULT_PI_SPACING_UNIT_FACTOR,
    omicronSpacingUnitFactor = DEFAULT_OMICRON_SPACING_UNIT_FACTOR,
    xiSpacingUnitFactor = DEFAULT_XI_SPACING_UNIT_FACTOR,
  }: Settings = {}
): Configuration {
  const lineHeight = computeLineHeight(baselineGrid, fontSize)
  const baselineSpacingUnit = computeSpacingUnit(baselineGrid)
  const piSpacingUnit = baselineSpacingUnit(piSpacingUnitFactor)
  const omicronSpacingUnit = baselineSpacingUnit(omicronSpacingUnitFactor)
  const xiSpacingUnit = baselineSpacingUnit(xiSpacingUnitFactor)

  return {
    fontSize,
    lineHeight,
    baselineGrid,
    piSpacingUnit,
    omicronSpacingUnit,
    xiSpacingUnit,
  }
}
