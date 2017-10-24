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

    it(`has default omicronSpacingUnit property`, ({ equal }) => {
      // Fixture setup
      const expectedOmicronSpacingUnit = 4
      // Excersise system
      const sut: Configuration = configure()
      const { omicronSpacingUnit: actualOmicronSpacingUnit } = sut
      // Verify outcome
      equal(expectedOmicronSpacingUnit, actualOmicronSpacingUnit)
    }),

    it(`has default xiSpacingUnit property`, ({ equal }) => {
      // Fixture setup
      const expectedXiSpacingUnit = 8
      // Excersise system
      const sut: Configuration = configure()
      const { xiSpacingUnit: actualXiSpacingUnit } = sut
      // Verify outcome
      equal(expectedXiSpacingUnit, actualXiSpacingUnit)
    }),

    it(`has default nuSpacingUnit property`, ({ equal }) => {
      // Fixture setup
      const expectedNuSpacingUnit = 16
      // Excersise system
      const sut: Configuration = configure()
      const { nuSpacingUnit: actualNuSpacingUnit } = sut
      // Verify outcome
      equal(expectedNuSpacingUnit, actualNuSpacingUnit)
    }),

    it(`has default muSpacingUnit property`, ({ equal }) => {
      // Fixture setup
      const expectedMuSpacingUnit = 24
      // Excersise system
      const sut: Configuration = configure()
      const { muSpacingUnit: actualMuSpacingUnit } = sut
      // Verify outcome
      equal(expectedMuSpacingUnit, actualMuSpacingUnit)
    }),

    it(`has default lambdaSpacingUnit property`, ({ equal }) => {
      // Fixture setup
      const expectedLambdaSpacingUnit = 32
      // Excersise system
      const sut: Configuration = configure()
      const { lambdaSpacingUnit: actualLambdaSpacingUnit } = sut
      // Verify outcome
      equal(expectedLambdaSpacingUnit, actualLambdaSpacingUnit)
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

  given(`an omicronSpacingUnitFactor setting`, [
    it(`returns a configuration of omicronSpacingUnit`, ({ equal }) => {
      // Fixture setup
      const arbitraryOmicronSpacingUnitFactor = 0.4
      const arbitrarySettings: Settings = {
        omicronSpacingUnitFactor: arbitraryOmicronSpacingUnitFactor,
      }
      const expectedOmicronSpacingUnit = 3
      // Excersise system
      const sut: Configuration = configure(arbitrarySettings)
      const { omicronSpacingUnit: actualOmicronSpacingUnit } = sut
      // Verify outcome
      equal(expectedOmicronSpacingUnit, actualOmicronSpacingUnit)
    }),
  ]),

  given(`an xiSpacingUnitFactor setting`, [
    it(`returns a configuration of xiSpacingUnit`, ({ equal }) => {
      // Fixture setup
      const arbitraryXiSpacingUnitFactor = 0.9
      const arbitrarySettings: Settings = { xiSpacingUnitFactor: arbitraryXiSpacingUnitFactor }
      const expectedXiSpacingUnit = 7
      // Excersise system
      const sut: Configuration = configure(arbitrarySettings)
      const { xiSpacingUnit: actualXiSpacingUnit } = sut
      // Verify outcome
      equal(expectedXiSpacingUnit, actualXiSpacingUnit)
    }),
  ]),

  given(`an nuSpacingUnitFactor setting`, [
    it(`returns a configuration of nuSpacingUnit`, ({ equal }) => {
      // Fixture setup
      const arbitraryNuSpacingUnitFactor = 1.9
      const arbitrarySettings: Settings = { nuSpacingUnitFactor: arbitraryNuSpacingUnitFactor }
      const expectedNuSpacingUnit = 15
      // Excersise system
      const sut: Configuration = configure(arbitrarySettings)
      const { nuSpacingUnit: actualNuSpacingUnit } = sut
      // Verify outcome
      equal(expectedNuSpacingUnit, actualNuSpacingUnit)
    }),
  ]),

  given(`an muSpacingUnitFactor setting`, [
    it(`returns a configuration of muSpacingUnit`, ({ equal }) => {
      // Fixture setup
      const arbitraryMuSpacingUnitFactor = 2.9
      const arbitrarySettings: Settings = { muSpacingUnitFactor: arbitraryMuSpacingUnitFactor }
      const expectedMuSpacingUnit = 23
      // Excersise system
      const sut: Configuration = configure(arbitrarySettings)
      const { muSpacingUnit: actualMuSpacingUnit } = sut
      // Verify outcome
      equal(expectedMuSpacingUnit, actualMuSpacingUnit)
    }),
  ]),
])
