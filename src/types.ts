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
  readonly fontSize: PixelCount
  readonly lineHeight: PixelCount
  readonly baselineGrid: PixelCount
  readonly piSpacingUnit: PixelCount
}

export type PixelCount = NonnegativeRealNumber

export type NonnegativeRealNumber = number

export type Settings = {
  readonly fontSize?: PixelCount
  readonly baselineGrid?: PixelCount
}