import { Configuration, Settings } from '../types'
import { Test, describe, given, it } from '@typed/test'

import { configure } from './configure'

export const testConfigure: Test = describe(`configure`, [
  it(`returns default configuration`, ({ ok }) => {
    // Excersise system
    const sut: Configuration = configure()
    // Verify outcome
    ok(sut instanceof Object)
  }),

  describe(`Configuration`, [
    it(`has default fontSize property`, ({ equal }) => {
      // Fixture setup
      const expectedFontSize = 16
      // Excersise system
      const sut: Configuration = configure()
      const { fontSize: actualFontSize } = sut
      // Verify outcome
      equal(expectedFontSize, actualFontSize)
    }),

    it(`has default lineHeight property`, ({ equal }) => {
      // Fixture setup
      const expectedLineHeight = 24
      // Excersise system
      const sut: Configuration = configure()
      const { lineHeight: actualLineHeight } = sut
      // Verify outcome
      equal(expectedLineHeight, actualLineHeight)
    }),

    it(`has default baselineGrid property`, ({ equal }) => {
      // Fixture setup
      const expectedBaselineGrid = 8
      // Excersise system
      const sut: Configuration = configure()
      const { baselineGrid: actualBaselineGrid } = sut
      // Verify outcome
      equal(expectedBaselineGrid, actualBaselineGrid)
    }),

    it(`has default piSpacingUnit property`, ({ equal }) => {
      // Fixture setup
      const expectedPiSpacingUnit = 2
      // Excersise system
      const sut: Configuration = configure()
      const { piSpacingUnit: actualPiSpacingUnit } = sut
      // Verify outcome
      equal(expectedPiSpacingUnit, actualPiSpacingUnit)
    }),
  ]),

  given(`a fontSize setting`, [
    it(`returns a configuration of fontSize`, ({ equal }) => {
      // Fixture setup
      const arbitraryFontSize = 13
      const arbitrarySettings: Settings = { fontSize: arbitraryFontSize }
      const expectedFontSize = arbitraryFontSize
      // Excersise system
      const sut: Configuration = configure(arbitrarySettings)
      const { fontSize: actualFontSize } = sut
      // Verify outcome
      equal(expectedFontSize, actualFontSize)
    }),

    it(`returns a configuration of lineHeight`, ({ equal }) => {
      // Fixture setup
      const arbitraryFontSize = 13
      const arbitrarySettings: Settings = { fontSize: arbitraryFontSize }
      const expectedLineHeight = 16
      // Excersise system
      const sut: Configuration = configure(arbitrarySettings)
      const { lineHeight: actualLineHeight } = sut
      // Verify outcome
      equal(expectedLineHeight, actualLineHeight)
    }),
  ]),

  given(`a baselineGrid setting`, [
    it(`returns a configuration of lineHeight`, ({ equal }) => {
      // Fixture setup
      const arbitraryBaselineGrid = 3
      const arbitrarySettings: Settings = { baselineGrid: arbitraryBaselineGrid }
      const expectedLineHeight = 18
      // Excersise system
      const sut: Configuration = configure(arbitrarySettings)
      const { lineHeight: actualLineHeight } = sut
      // Verify outcome
      equal(expectedLineHeight, actualLineHeight)
    }),
  ]),

  given(`a piSpacingUnitFactor setting`, [
    it(`returns a configuration of piSpacingUnit`, ({ equal }) => {
      // Fixture setup
      const arbitraryPiSpacingUnitFactor = 0.15
      const arbitrarySettings: Settings = { piSpacingUnitFactor: arbitraryPiSpacingUnitFactor }
      const expectedPiSpacingUnit = 1
      // Excersise system
      const sut: Configuration = configure(arbitrarySettings)
      const { piSpacingUnit: actualPiSpacingUnit } = sut
      // Verify outcome
      equal(expectedPiSpacingUnit, actualPiSpacingUnit)
    }),
  ]),
])
