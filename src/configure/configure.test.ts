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
      const expectedEtaSpacingUnit = `64px`
      // Excersise system
      const sut: Configuration = configure()
      const { etaSpacingUnit: actualEtaSpacingUnit } = sut
      // Verify outcome
      equal(expectedEtaSpacingUnit, actualEtaSpacingUnit)
    }),

    it(`has default zetaSpacingUnit property`, ({ equal }) => {
      // Fixture setup
      const expectedZetaSpacingUnit = `72px`
      // Excersise system
      const sut: Configuration = configure()
      const { zetaSpacingUnit: actualZetaSpacingUnit } = sut
      // Verify outcome
      equal(expectedZetaSpacingUnit, actualZetaSpacingUnit)
    }),

    it(`has default epsilonSpacingUnit property`, ({ equal }) => {
      // Fixture setup
      const expectedEpsilonSpacingUnit = `80px`
      // Excersise system
      const sut: Configuration = configure()
      const { epsilonSpacingUnit: actualEpsilonSpacingUnit } = sut
      // Verify outcome
      equal(expectedEpsilonSpacingUnit, actualEpsilonSpacingUnit)
    }),

    it(`has default deltaSpacingUnit property`, ({ equal }) => {
      // Fixture setup
      const expectedDeltaSpacingUnit = `88px`
      // Excersise system
      const sut: Configuration = configure()
      const { deltaSpacingUnit: actualDeltaSpacingUnit } = sut
      // Verify outcome
      equal(expectedDeltaSpacingUnit, actualDeltaSpacingUnit)
    }),

    it(`has default gammaSpacingUnit property`, ({ equal }) => {
      // Fixture setup
      const expectedGammaSpacingUnit = `96px`
      // Excersise system
      const sut: Configuration = configure()
      const { gammaSpacingUnit: actualGammaSpacingUnit } = sut
      // Verify outcome
      equal(expectedGammaSpacingUnit, actualGammaSpacingUnit)
    }),

    it(`has default betaSpacingUnit property`, ({ equal }) => {
      // Fixture setup
      const expectedBetaSpacingUnit = `104px`
      // Excersise system
      const sut: Configuration = configure()
      const { betaSpacingUnit: actualBetaSpacingUnit } = sut
      // Verify outcome
      equal(expectedBetaSpacingUnit, actualBetaSpacingUnit)
    }),

    it(`has default alphaSpacingUnit property`, ({ equal }) => {
      // Fixture setup
      const expectedAlphaSpacingUnit = `112px`
      // Excersise system
      const sut: Configuration = configure()
      const { alphaSpacingUnit: actualAlphaSpacingUnit } = sut
      // Verify outcome
      equal(expectedAlphaSpacingUnit, actualAlphaSpacingUnit)
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

  given(`a xiSpacingUnitFactor setting`, [
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

  given(`a nuSpacingUnitFactor setting`, [
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

  given(`a muSpacingUnitFactor setting`, [
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

  given(`a lambdaSpacingUnitFactor setting`, [
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

  given(`a kappaSpacingUnitFactor setting`, [
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

  given(`a thetaSpacingUnitFactor setting`, [
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

  given(`an etaSpacingUnitFactor setting`, [
    it(`returns a configuration of etaSpacingUnit`, ({ equal }) => {
      // Fixture setup
      const arbitraryEtaSpacingUnitFactor = 7.9
      const arbitrarySettings: Settings = {
        etaSpacingUnitFactor: arbitraryEtaSpacingUnitFactor,
      }
      const expectedEtaSpacingUnit = `63px`
      // Excersise system
      const sut: Configuration = configure(arbitrarySettings)
      const { etaSpacingUnit: actualEtaSpacingUnit } = sut
      // Verify outcome
      equal(expectedEtaSpacingUnit, actualEtaSpacingUnit)
    }),
  ]),

  given(`a zetaSpacingUnitFactor setting`, [
    it(`returns a configuration of zetaSpacingUnit`, ({ equal }) => {
      // Fixture setup
      const arbitraryZetaSpacingUnitFactor = 8.9
      const arbitrarySettings: Settings = {
        zetaSpacingUnitFactor: arbitraryZetaSpacingUnitFactor,
      }
      const expectedZetaSpacingUnit = `71px`
      // Excersise system
      const sut: Configuration = configure(arbitrarySettings)
      const { zetaSpacingUnit: actualZetaSpacingUnit } = sut
      // Verify outcome
      equal(expectedZetaSpacingUnit, actualZetaSpacingUnit)
    }),
  ]),

  given(`an epsilonSpacingUnitFactor setting`, [
    it(`returns a configuration of epsilonSpacingUnit`, ({ equal }) => {
      // Fixture setup
      const arbitraryEpsilonSpacingUnitFactor = 9.9
      const arbitrarySettings: Settings = {
        epsilonSpacingUnitFactor: arbitraryEpsilonSpacingUnitFactor,
      }
      const expectedEpsilonSpacingUnit = `79px`
      // Excersise system
      const sut: Configuration = configure(arbitrarySettings)
      const { epsilonSpacingUnit: actualEpsilonSpacingUnit } = sut
      // Verify outcome
      equal(expectedEpsilonSpacingUnit, actualEpsilonSpacingUnit)
    }),
  ]),

  given(`a deltaSpacingUnitFactor setting`, [
    it(`returns a configuration of deltaSpacingUnit`, ({ equal }) => {
      // Fixture setup
      const arbitraryDeltaSpacingUnitFactor = 10.9
      const arbitrarySettings: Settings = {
        deltaSpacingUnitFactor: arbitraryDeltaSpacingUnitFactor,
      }
      const expectedDeltaSpacingUnit = `87px`
      // Excersise system
      const sut: Configuration = configure(arbitrarySettings)
      const { deltaSpacingUnit: actualDeltaSpacingUnit } = sut
      // Verify outcome
      equal(expectedDeltaSpacingUnit, actualDeltaSpacingUnit)
    }),
  ]),

  given(`a gammaSpacingUnitFactor setting`, [
    it(`returns a configuration of gammaSpacingUnit`, ({ equal }) => {
      // Fixture setup
      const arbitraryGammaSpacingUnitFactor = 11.9
      const arbitrarySettings: Settings = {
        gammaSpacingUnitFactor: arbitraryGammaSpacingUnitFactor,
      }
      const expectedGammaSpacingUnit = `95px`
      // Excersise system
      const sut: Configuration = configure(arbitrarySettings)
      const { gammaSpacingUnit: actualGammaSpacingUnit } = sut
      // Verify outcome
      equal(expectedGammaSpacingUnit, actualGammaSpacingUnit)
    }),
  ]),

  given(`a betaSpacingUnitFactor setting`, [
    it(`returns a configuration of betaSpacingUnit`, ({ equal }) => {
      // Fixture setup
      const arbitraryBetaSpacingUnitFactor = 12.9
      const arbitrarySettings: Settings = {
        betaSpacingUnitFactor: arbitraryBetaSpacingUnitFactor,
      }
      const expectedBetaSpacingUnit = `103px`
      // Excersise system
      const sut: Configuration = configure(arbitrarySettings)
      const { betaSpacingUnit: actualBetaSpacingUnit } = sut
      // Verify outcome
      equal(expectedBetaSpacingUnit, actualBetaSpacingUnit)
    }),
  ]),

  given(`a alphaSpacingUnitFactor setting`, [
    it(`returns a configuration of alphaSpacingUnit`, ({ equal }) => {
      // Fixture setup
      const arbitraryAlphaSpacingUnitFactor = 13.9
      const arbitrarySettings: Settings = {
        alphaSpacingUnitFactor: arbitraryAlphaSpacingUnitFactor,
      }
      const expectedAlphaSpacingUnit = `111px`
      // Excersise system
      const sut: Configuration = configure(arbitrarySettings)
      const { alphaSpacingUnit: actualAlphaSpacingUnit } = sut
      // Verify outcome
      equal(expectedAlphaSpacingUnit, actualAlphaSpacingUnit)
    }),
  ]),
])
