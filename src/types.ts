/*!
 * Copyright © 2017 The Typestyled Authors. All rights reserved.
 *
 * File:    types.ts
 *
 * Authors: Frederik Krautwald <fkrautwald@gmail.com>
 * Date:    October 23, 2017
 *
 * Description:
 *
 * This file provides core types.
 */

export type Configuration = {
  readonly fontSize: PixelLength
  readonly lineHeight: PixelLength
  readonly baselineGrid: PixelLength
  readonly piSpacingUnit: PixelLength
  readonly omicronSpacingUnit: PixelLength
  readonly xiSpacingUnit: PixelLength
  readonly nuSpacingUnit: PixelLength
  readonly muSpacingUnit: PixelLength
  readonly lambdaSpacingUnit: PixelLength
  readonly kappaSpacingUnit: PixelLength
  readonly iotaSpacingUnit: PixelLength
  readonly thetaSpacingUnit: PixelLength
  readonly etaSpacingUnit: PixelLength
  readonly zetaSpacingUnit: PixelLength
  readonly epsilonSpacingUnit: PixelLength
  readonly deltaSpacingUnit: PixelLength
  readonly gammaSpacingUnit: PixelLength
  readonly betaSpacingUnit: PixelLength
  readonly alphaSpacingUnit: PixelLength
}

export type PixelLength = string

export type NonnegativeIntegerPixelLength = NonnegativeInteger

export type NonnegativeInteger = number

export type Settings = {
  readonly fontSize?: PixelLength
  readonly baselineGrid?: PixelLength
  readonly piSpacingUnitFactor?: NonnegativeRealNumber
  readonly omicronSpacingUnitFactor?: NonnegativeRealNumber
  readonly xiSpacingUnitFactor?: NonnegativeRealNumber
  readonly nuSpacingUnitFactor?: NonnegativeRealNumber
  readonly muSpacingUnitFactor?: NonnegativeRealNumber
  readonly lambdaSpacingUnitFactor?: NonnegativeRealNumber
  readonly kappaSpacingUnitFactor?: NonnegativeRealNumber
  readonly iotaSpacingUnitFactor?: NonnegativeRealNumber
  readonly thetaSpacingUnitFactor?: NonnegativeRealNumber
  readonly etaSpacingUnitFactor?: NonnegativeRealNumber
  readonly zetaSpacingUnitFactor?: NonnegativeRealNumber
  readonly epsilonSpacingUnitFactor?: NonnegativeRealNumber
  readonly deltaSpacingUnitFactor?: NonnegativeRealNumber
  readonly gammaSpacingUnitFactor?: NonnegativeRealNumber
  readonly betaSpacingUnitFactor?: NonnegativeRealNumber
}

export type NonnegativeRealNumber = number
