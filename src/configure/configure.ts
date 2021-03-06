/*!
 * Copyright © 2017 The Typestyled Authors. Licensed under the MIT license.
 * See LICENSE.txt in the project root for complete license information.
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

import { Configuration, NonnegativeRealNumber, PixelLength, Settings } from '../types'

import { computeLineHeight } from './computeLineHeight'
import { computeSpacingUnit } from './computeSpacingUnit'

const DEFAULT_FONT_SIZE: PixelLength = `16px`
const DEFAULT_BASELINE_GRID: PixelLength = `8px`
const DEFAULT_PI_SPACING_UNIT_FACTOR: NonnegativeRealNumber = 0.25
const DEFAULT_OMICRON_SPACING_UNIT_FACTOR: NonnegativeRealNumber = 0.5
const DEFAULT_XI_SPACING_UNIT_FACTOR: NonnegativeRealNumber = 1
const DEFAULT_NU_SPACING_UNIT_FACTOR: NonnegativeRealNumber = 2
const DEFAULT_MU_SPACING_UNIT_FACTOR: NonnegativeRealNumber = 3
const DEFAULT_LAMBDA_SPACING_UNIT_FACTOR: NonnegativeRealNumber = 4
const DEFAULT_KAPPA_SPACING_UNIT_FACTOR: NonnegativeRealNumber = 5
const DEFAULT_IOTA_SPACING_UNIT_FACTOR: NonnegativeRealNumber = 6
const DEFAULT_THETA_SPACING_UNIT_FACTOR: NonnegativeRealNumber = 7
const DEFAULT_ETA_SPACING_UNIT_FACTOR: NonnegativeRealNumber = 8
const DEFAULT_ZETA_SPACING_UNIT_FACTOR: NonnegativeRealNumber = 9
const DEFAULT_EPSILON_SPACING_UNIT_FACTOR: NonnegativeRealNumber = 10
const DEFAULT_DELTA_SPACING_UNIT_FACTOR: NonnegativeRealNumber = 11
const DEFAULT_GAMMA_SPACING_UNIT_FACTOR: NonnegativeRealNumber = 12
const DEFAULT_BETA_SPACING_UNIT_FACTOR: NonnegativeRealNumber = 13
const DEFAULT_ALPHA_SPACING_UNIT_FACTOR: NonnegativeRealNumber = 14

/**
 * Configures the core with the given settings.
 */
export function configure(
  {
    fontSize = DEFAULT_FONT_SIZE,
    baselineGrid = DEFAULT_BASELINE_GRID,
    piSpacingUnitFactor = DEFAULT_PI_SPACING_UNIT_FACTOR,
    omicronSpacingUnitFactor = DEFAULT_OMICRON_SPACING_UNIT_FACTOR,
    xiSpacingUnitFactor = DEFAULT_XI_SPACING_UNIT_FACTOR,
    nuSpacingUnitFactor = DEFAULT_NU_SPACING_UNIT_FACTOR,
    muSpacingUnitFactor = DEFAULT_MU_SPACING_UNIT_FACTOR,
    lambdaSpacingUnitFactor = DEFAULT_LAMBDA_SPACING_UNIT_FACTOR,
    kappaSpacingUnitFactor = DEFAULT_KAPPA_SPACING_UNIT_FACTOR,
    iotaSpacingUnitFactor = DEFAULT_IOTA_SPACING_UNIT_FACTOR,
    thetaSpacingUnitFactor = DEFAULT_THETA_SPACING_UNIT_FACTOR,
    etaSpacingUnitFactor = DEFAULT_ETA_SPACING_UNIT_FACTOR,
    zetaSpacingUnitFactor = DEFAULT_ZETA_SPACING_UNIT_FACTOR,
    epsilonSpacingUnitFactor = DEFAULT_EPSILON_SPACING_UNIT_FACTOR,
    deltaSpacingUnitFactor = DEFAULT_DELTA_SPACING_UNIT_FACTOR,
    gammaSpacingUnitFactor = DEFAULT_GAMMA_SPACING_UNIT_FACTOR,
    betaSpacingUnitFactor = DEFAULT_BETA_SPACING_UNIT_FACTOR,
    alphaSpacingUnitFactor = DEFAULT_ALPHA_SPACING_UNIT_FACTOR,
  }: Settings = {}
): Configuration {
  const lineHeight = computeLineHeight(baselineGrid, fontSize)
  const baselineSpacingUnit = computeSpacingUnit(baselineGrid)
  const piSpacingUnit = baselineSpacingUnit(piSpacingUnitFactor)
  const omicronSpacingUnit = baselineSpacingUnit(omicronSpacingUnitFactor)
  const xiSpacingUnit = baselineSpacingUnit(xiSpacingUnitFactor)
  const nuSpacingUnit = baselineSpacingUnit(nuSpacingUnitFactor)
  const muSpacingUnit = baselineSpacingUnit(muSpacingUnitFactor)
  const lambdaSpacingUnit = baselineSpacingUnit(lambdaSpacingUnitFactor)
  const kappaSpacingUnit = baselineSpacingUnit(kappaSpacingUnitFactor)
  const iotaSpacingUnit = baselineSpacingUnit(iotaSpacingUnitFactor)
  const thetaSpacingUnit = baselineSpacingUnit(thetaSpacingUnitFactor)
  const etaSpacingUnit = baselineSpacingUnit(etaSpacingUnitFactor)
  const zetaSpacingUnit = baselineSpacingUnit(zetaSpacingUnitFactor)
  const epsilonSpacingUnit = baselineSpacingUnit(epsilonSpacingUnitFactor)
  const deltaSpacingUnit = baselineSpacingUnit(deltaSpacingUnitFactor)
  const gammaSpacingUnit = baselineSpacingUnit(gammaSpacingUnitFactor)
  const betaSpacingUnit = baselineSpacingUnit(betaSpacingUnitFactor)
  const alphaSpacingUnit = baselineSpacingUnit(alphaSpacingUnitFactor)

  return {
    fontSize,
    lineHeight,
    baselineGrid,
    piSpacingUnit,
    omicronSpacingUnit,
    xiSpacingUnit,
    nuSpacingUnit,
    muSpacingUnit,
    lambdaSpacingUnit,
    kappaSpacingUnit,
    iotaSpacingUnit,
    thetaSpacingUnit,
    etaSpacingUnit,
    zetaSpacingUnit,
    epsilonSpacingUnit,
    deltaSpacingUnit,
    gammaSpacingUnit,
    betaSpacingUnit,
    alphaSpacingUnit,
  }
}
