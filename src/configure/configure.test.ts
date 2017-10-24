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
      const expectedFontSize = `16px`
      // Excersise system
      const sut: Configuration = configure()
      const { fontSize: actualFontSize } = sut
      // Verify outcome
      equal(expectedFontSize, actualFontSize)
    }),

    it(`has default lineHeight property`, ({ equal }) => {
      // Fixture setup
      const expectedLineHeight = `24px`
      // Excersise system
      const sut: Configuration = configure()
      const { lineHeight: actualLineHeight } = sut
      // Verify outcome
      equal(expectedLineHeight, actualLineHeight)
    }),

    it(`has default baselineGrid property`, ({ equal }) => {
      // Fixture setup
      const expectedBaselineGrid = `8px`
      // Excersise system
      const sut: Configuration = configure()
      const { baselineGrid: actualBaselineGrid } = sut
      // Verify outcome
      equal(expectedBaselineGrid, actualBaselineGrid)
    }),

    it(`has default piSpacingUnit property`, ({ equal }) => {
      // Fixture setup
      const expectedPiSpacingUnit = `2px`
      // Excersise system
      const sut: Configuration = configure()
      const { piSpacingUnit: actualPiSpacingUnit } = sut
      // Verify outcome
      equal(expectedPiSpacingUnit, actualPiSpacingUnit)
    }),

    it(`has default omicronSpacingUnit property`, ({ equal }) => {
      // Fixture setup
      const expectedOmicronSpacingUnit = `4px`
      // Excersise system
      const sut: Configuration = configure()
      const { omicronSpacingUnit: actualOmicronSpacingUnit } = sut
      // Verify outcome
      equal(expectedOmicronSpacingUnit, actualOmicronSpacingUnit)
    }),

    it(`has default xiSpacingUnit property`, ({ equal }) => {
      // Fixture setup
      const expectedXiSpacingUnit = `8px`
      // Excersise system
      const sut: Configuration = configure()
      const { xiSpacingUnit: actualXiSpacingUnit } = sut
      // Verify outcome
      equal(expectedXiSpacingUnit, actualXiSpacingUnit)
    }),

    it(`has default nuSpacingUnit property`, ({ equal }) => {
      // Fixture setup
      const expectedNuSpacingUnit = `16px`
      // Excersise system
      const sut: Configuration = configure()
      const { nuSpacingUnit: actualNuSpacingUnit } = sut
      // Verify outcome
      equal(expectedNuSpacingUnit, actualNuSpacingUnit)
    }),

    it(`has default muSpacingUnit property`, ({ equal }) => {
      // Fixture setup
      const expectedMuSpacingUnit = `24px`
      // Excersise system
      const sut: Configuration = configure()
      const { muSpacingUnit: actualMuSpacingUnit } = sut
      // Verify outcome
      equal(expectedMuSpacingUnit, actualMuSpacingUnit)
    }),

    it(`has default lambdaSpacingUnit property`, ({ equal }) => {
      // Fixture setup
      const expectedLambdaSpacingUnit = `32px`
      // Excersise system
      const sut: Configuration = configure()
      const { lambdaSpacingUnit: actualLambdaSpacingUnit } = sut
      // Verify outcome
      equal(expectedLambdaSpacingUnit, actualLambdaSpacingUnit)
    }),

    it(`has default kappaSpacingUnit property`, ({ equal }) => {
      // Fixture setup
      const expectedKappaSpacingUnit = `40px`
      // Excersise system
      const sut: Configuration = configure()
      const { kappaSpacingUnit: actualKappaSpacingUnit } = sut
      // Verify outcome
      equal(expectedKappaSpacingUnit, actualKappaSpacingUnit)
    }),

    it(`has default iotaSpacingUnit property`, ({ equal }) => {
      // Fixture setup
      const expectedIotaSpacingUnit = `48px`
      // Excersise system
      const sut: Configuration = configure()
      const { iotaSpacingUnit: actualIotaSpacingUnit } = sut
      // Verify outcome
      equal(expectedIotaSpacingUnit, actualIotaSpacingUnit)
    }),

    it(`has default thetaSpacingUnit property`, ({ equal }) => {
      // Fixture setup
      const expectedThetaSpacingUnit = `56px`
      // Excersise system
      const sut: Configuration = configure()
      const { thetaSpacingUnit: actualThetaSpacingUnit } = sut
      // Verify outcome
      equal(expectedThetaSpacingUnit, actualThetaSpacingUnit)
    }),

    it(`has default etaSpacingUnit property`, ({ equal }) => {
      // Fixture setup
      const expectedEtaSpacingUnit = `60px`
      // Excersise system
      const sut: Configuration = configure()
      const { etaSpacingUnit: actualEtaSpacingUnit } = sut
      // Verify outcome
      equal(expectedEtaSpacingUnit, actualEtaSpacingUnit)
    }),
  ]),

  given(`a fontSize setting`, [
    it(`returns a configuration of fontSize`, ({ equal }) => {
      // Fixture setup
      const arbitraryFontSize = `13px`
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
      const arbitraryFontSize = `13px`
      const arbitrarySettings: Settings = { fontSize: arbitraryFontSize }
      const expectedLineHeight = `16px`
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
      const arbitraryBaselineGrid = `3px`
      const arbitrarySettings: Settings = { baselineGrid: arbitraryBaselineGrid }
      const expectedLineHeight = `18px`
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
      const expectedPiSpacingUnit = `1px`
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
      const expectedOmicronSpacingUnit = `3px`
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
      const expectedXiSpacingUnit = `7px`
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
      const expectedNuSpacingUnit = `15px`
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
      const expectedMuSpacingUnit = `23px`
      // Excersise system
      const sut: Configuration = configure(arbitrarySettings)
      const { muSpacingUnit: actualMuSpacingUnit } = sut
      // Verify outcome
      equal(expectedMuSpacingUnit, actualMuSpacingUnit)
    }),
  ]),

  given(`an lambdaSpacingUnitFactor setting`, [
    it(`returns a configuration of lambdaSpacingUnit`, ({ equal }) => {
      // Fixture setup
      const arbitraryLambdaSpacingUnitFactor = 3.9
      const arbitrarySettings: Settings = {
        lambdaSpacingUnitFactor: arbitraryLambdaSpacingUnitFactor,
      }
      const expectedLambdaSpacingUnit = `31px`
      // Excersise system
      const sut: Configuration = configure(arbitrarySettings)
      const { lambdaSpacingUnit: actualLambdaSpacingUnit } = sut
      // Verify outcome
      equal(expectedLambdaSpacingUnit, actualLambdaSpacingUnit)
    }),
  ]),

  given(`an kappaSpacingUnitFactor setting`, [
    it(`returns a configuration of kappaSpacingUnit`, ({ equal }) => {
      // Fixture setup
      const arbitraryKappaSpacingUnitFactor = 4.9
      const arbitrarySettings: Settings = {
        kappaSpacingUnitFactor: arbitraryKappaSpacingUnitFactor,
      }
      const expectedKappaSpacingUnit = `39px`
      // Excersise system
      const sut: Configuration = configure(arbitrarySettings)
      const { kappaSpacingUnit: actualKappaSpacingUnit } = sut
      // Verify outcome
      equal(expectedKappaSpacingUnit, actualKappaSpacingUnit)
    }),
  ]),

  given(`an iotaSpacingUnitFactor setting`, [
    it(`returns a configuration of iotaSpacingUnit`, ({ equal }) => {
      // Fixture setup
      const arbitraryIotaSpacingUnitFactor = 5.9
      const arbitrarySettings: Settings = {
        iotaSpacingUnitFactor: arbitraryIotaSpacingUnitFactor,
      }
      const expectedIotaSpacingUnit = `47px`
      // Excersise system
      const sut: Configuration = configure(arbitrarySettings)
      const { iotaSpacingUnit: actualIotaSpacingUnit } = sut
      // Verify outcome
      equal(expectedIotaSpacingUnit, actualIotaSpacingUnit)
    }),
  ]),

  given(`an thetaSpacingUnitFactor setting`, [
    it(`returns a configuration of thetaSpacingUnit`, ({ equal }) => {
      // Fixture setup
      const arbitraryThetaSpacingUnitFactor = 6.9
      const arbitrarySettings: Settings = {
        thetaSpacingUnitFactor: arbitraryThetaSpacingUnitFactor,
      }
      const expectedThetaSpacingUnit = `55px`
      // Excersise system
      const sut: Configuration = configure(arbitrarySettings)
      const { thetaSpacingUnit: actualThetaSpacingUnit } = sut
      // Verify outcome
      equal(expectedThetaSpacingUnit, actualThetaSpacingUnit)
    }),
  ]),
])
