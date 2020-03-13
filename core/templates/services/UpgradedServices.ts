// Copyright 2019 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Service for storing all upgraded services
 */

import { downgradeInjectable } from '@angular/upgrade/static';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpXhrBackend,
  /* eslint-disable camelcase */
  ɵangular_packages_common_http_http_d
  /* eslint-enable camelcase */
} from '@angular/common/http';

import { AlertsService } from 'services/alerts.service';
import { AngularNameService } from
  'pages/exploration-editor-page/services/angular-name.service';
import { AnswerClassificationResultObjectFactory } from
  'domain/classifier/AnswerClassificationResultObjectFactory';
import { AnswerGroupObjectFactory } from
  'domain/exploration/AnswerGroupObjectFactory';
import { AudioLanguageObjectFactory } from
  'domain/utilities/AudioLanguageObjectFactory';
import { AutogeneratedAudioLanguageObjectFactory } from
  'domain/utilities/AutogeneratedAudioLanguageObjectFactory';
import { AudioTranslationLanguageService } from
  'pages/exploration-player-page/services/audio-translation-language.service';
import { BackgroundMaskService } from
  'services/stateful/background-mask.service';
import { baseInteractionValidationService } from
  'interactions/base-interaction-validation.service';
import { BrowserCheckerService } from
  'domain/utilities/browser-checker.service';
import { CamelCaseToHyphensPipe } from
  'filters/string-utility-filters/camel-case-to-hyphens.pipe';
import { ChangesInHumanReadableFormService } from
  // eslint-disable-next-line max-len
  'pages/exploration-editor-page/services/changes-in-human-readable-form.service';
import { ClassifierObjectFactory } from
  'domain/classifier/ClassifierObjectFactory';
import { CodeNormalizerService } from 'services/code-normalizer.service';
import { CodeReplPredictionService } from
  'interactions/CodeRepl/code-repl-prediction.service';
import { CodeReplRulesService } from
  'interactions/CodeRepl/directives/code-repl-rules.service';
import { ComputeGraphService } from 'services/compute-graph.service';
import { ConceptCardObjectFactory } from
  'domain/skill/ConceptCardObjectFactory';
import { ContextService } from 'services/context.service';
import { CountVectorizerService } from 'classifiers/count-vectorizer.service';
import { CsrfTokenService } from 'services/csrf-token.service';
import { DateTimeFormatService } from 'services/date-time-format.service';
import { DebouncerService } from 'services/debouncer.service';
import { DebugInfoTrackerService } from 'services/debug-info-tracker.service';
import { DeviceInfoService } from 'services/contextual/device-info.service';
import { DocumentAttributeCustomizationService } from
  'services/contextual/document-attribute-customization.service';
import { EditabilityService } from 'services/editability.service';
import { EditorFirstTimeEventsService } from
  'pages/exploration-editor-page/services/editor-first-time-events.service';
import { EmailDashboardDataService } from
  'pages/email-dashboard-pages/email-dashboard-data.service';
import { EntityContextObjectFactory } from
  'domain/utilities/EntityContextObjectFactory';
import { ExplorationDiffService } from
  'pages/exploration-editor-page/services/exploration-diff.service';
import { ExplorationDraftObjectFactory } from
  'domain/exploration/ExplorationDraftObjectFactory';
import { ExplorationFeaturesService } from
  'services/exploration-features.service';
import { ExplorationHtmlFormatterService } from
  'services/exploration-html-formatter.service';
import { ExplorationObjectFactory } from
  'domain/exploration/ExplorationObjectFactory';
import { ExpressionParserService } from 'expressions/expression-parser.service';
import { ExtensionTagAssemblerService } from
  'services/extension-tag-assembler.service';
import { ExtractImageFilenamesFromStateService } from
  // eslint-disable-next-line max-len
  'pages/exploration-player-page/services/extract-image-filenames-from-state.service';
import { FeedbackThreadObjectFactory } from
  'domain/feedback_thread/FeedbackThreadObjectFactory';
import { FormatTimePipe } from 'filters/format-timer.pipe';
import { FractionObjectFactory } from 'domain/objects/FractionObjectFactory';
import { GenerateContentIdService } from 'services/generate-content-id.service';
import { HintObjectFactory } from 'domain/exploration/HintObjectFactory';
import { HtmlEscaperService } from 'services/html-escaper.service';
import { IdGenerationService } from 'services/id-generation.service';
import { ImprovementActionButtonObjectFactory } from
  'domain/statistics/ImprovementActionButtonObjectFactory';
import { InteractionObjectFactory } from
  'domain/exploration/InteractionObjectFactory';
import { LanguageUtilService } from 'domain/utilities/language-util.service';
import { LearnerActionObjectFactory } from
  'domain/statistics/LearnerActionObjectFactory';
import { LearnerAnswerDetailsObjectFactory } from
  'domain/statistics/LearnerAnswerDetailsObjectFactory';
import { LearnerAnswerInfoObjectFactory } from
  'domain/statistics/LearnerAnswerInfoObjectFactory';
import { LearnerDashboardActivityIdsObjectFactory } from
  'domain/learner_dashboard/LearnerDashboardActivityIdsObjectFactory';
import { LocalStorageService } from 'services/local-storage.service';
import { LoggerService } from 'services/contextual/logger.service';
import { MetaTagCustomizationService } from
  'services/contextual/meta-tag-customization.service';
import { NormalizeWhitespacePipe } from
  'filters/string-utility-filters/normalize-whitespace.pipe';
/* eslint-disable max-len */
import { NormalizeWhitespacePunctuationAndCasePipe } from
  'filters/string-utility-filters/normalize-whitespace-punctuation-and-case.pipe';
/* eslint-enable max-len */
import { NumberWithUnitsObjectFactory } from
  'domain/objects/NumberWithUnitsObjectFactory';
import { OutcomeObjectFactory } from 'domain/exploration/OutcomeObjectFactory';
import { ParamChangeObjectFactory } from
  'domain/exploration/ParamChangeObjectFactory';
import { ParamChangesObjectFactory } from
  'domain/exploration/ParamChangesObjectFactory';
import { ParamMetadataObjectFactory } from
  'domain/exploration/ParamMetadataObjectFactory';
import { ParamSpecObjectFactory } from
  'domain/exploration/ParamSpecObjectFactory';
import { ParamSpecsObjectFactory } from
  'domain/exploration/ParamSpecsObjectFactory';
import { ParamTypeObjectFactory } from
  'domain/exploration/ParamTypeObjectFactory';
import { PencilCodeEditorRulesService } from
  'interactions/PencilCodeEditor/directives/pencil-code-editor-rules.service';
import { PlayerPositionService } from
  'pages/exploration-player-page/services/player-position.service';
import { PlayerTranscriptService } from
  'pages/exploration-player-page/services/player-transcript.service';
import { PlaythroughIssueObjectFactory } from
  'domain/statistics/PlaythroughIssueObjectFactory';
import { PlaythroughObjectFactory } from
  'domain/statistics/PlaythroughObjectFactory';
import { PythonProgramTokenizer } from 'classifiers/python-program.tokenizer';
import { ReadOnlyStoryNodeObjectFactory } from
  'domain/story_viewer/ReadOnlyStoryNodeObjectFactory';
import { RecordedVoiceoversObjectFactory } from
  'domain/exploration/RecordedVoiceoversObjectFactory';
import { RuleObjectFactory } from 'domain/exploration/RuleObjectFactory';
import { SidebarStatusService } from 'domain/sidebar/sidebar-status.service';
import { SiteAnalyticsService } from 'services/site-analytics.service';
import { SkillSummaryObjectFactory } from
  'domain/skill/SkillSummaryObjectFactory';
import { SolutionObjectFactory } from
  'domain/exploration/SolutionObjectFactory';
import { SolutionValidityService } from
  'pages/exploration-editor-page/editor-tab/services/solution-validity.service';
import { StateCardObjectFactory } from
  'domain/state_card/StateCardObjectFactory';
import { StateClassifierMappingService } from
  'pages/exploration-player-page/services/state-classifier-mapping.service';
import { StateContentService } from
  // eslint-disable-next-line max-len
  'components/state-editor/state-editor-properties-services/state-content.service';
import { StateCustomizationArgsService } from
  // eslint-disable-next-line max-len
  'components/state-editor/state-editor-properties-services/state-customization-args.service';
import { StateEditorService } from
  // eslint-disable-next-line max-len
  'components/state-editor/state-editor-properties-services/state-editor.service';
import { StateImprovementSuggestionService } from
  // eslint-disable-next-line max-len
  'pages/exploration-editor-page/statistics-tab/services/state-improvement-suggestion.service';
import { StateHintsService } from
  // eslint-disable-next-line max-len
  'components/state-editor/state-editor-properties-services/state-hints.service';
import { StateInteractionIdService } from
  // eslint-disable-next-line max-len
  'components/state-editor/state-editor-properties-services/state-interaction-id.service';
import { StateObjectFactory } from 'domain/state/StateObjectFactory';
import { StatesObjectFactory } from 'domain/exploration/StatesObjectFactory';
import { StatePropertyService } from
  // eslint-disable-next-line max-len
  'components/state-editor/state-editor-properties-services/state-property.service';
import { StateRecordedVoiceoversService } from
  // eslint-disable-next-line max-len
  'components/state-editor/state-editor-properties-services/state-recorded-voiceovers.service';
import { StateSolicitAnswerDetailsService } from
  // eslint-disable-next-line max-len
  'components/state-editor/state-editor-properties-services/state-solicit-answer-details.service';
import { StateSolutionService } from
  // eslint-disable-next-line max-len
  'components/state-editor/state-editor-properties-services/state-solution.service';
import { StateWrittenTranslationsService } from
  // eslint-disable-next-line max-len
  'components/state-editor/state-editor-properties-services/state-written-translations.service';
import { StopwatchObjectFactory } from
  'domain/utilities/StopwatchObjectFactory';
import { StoryPlaythroughObjectFactory } from
  'domain/story_viewer/StoryPlaythroughObjectFactory';
import { StoryReferenceObjectFactory } from
  'domain/topic/StoryReferenceObjectFactory';
import { StorySummaryObjectFactory } from
  'domain/story/StorySummaryObjectFactory';
import { SubtitledHtmlObjectFactory } from
  'domain/exploration/SubtitledHtmlObjectFactory';
import { SubtopicObjectFactory } from
  'domain/topic/SubtopicObjectFactory';
import { SuggestionModalService } from 'services/suggestion-modal.service';
import { SuggestionObjectFactory } from
  'domain/suggestion/SuggestionObjectFactory';
import { SuggestionThreadObjectFactory } from
  'domain/suggestion/SuggestionThreadObjectFactory';
import { SVMPredictionService } from 'classifiers/svm-prediction.service';
import { TextInputPredictionService } from
  'interactions/TextInput/text-input-prediction.service';
import { TextInputRulesService } from
  'interactions/TextInput/directives/text-input-rules.service';
import { TextInputValidationService } from
  'interactions/TextInput/directives/text-input-validation.service';
import { ThreadStatusDisplayService } from
  // eslint-disable-next-line max-len
  'pages/exploration-editor-page/feedback-tab/services/thread-status-display.service';
import { TopicObjectFactory } from
  'domain/topic/TopicObjectFactory';
import { TopicSummaryObjectFactory } from
  'domain/topic/TopicSummaryObjectFactory';
import { UnitsObjectFactory } from 'domain/objects/UnitsObjectFactory';
import { UrlInterpolationService } from
  'domain/utilities/url-interpolation.service';
import { UrlService } from 'services/contextual/url.service';
import { UserInfoObjectFactory } from 'domain/user/UserInfoObjectFactory';
import { UtilsService } from 'services/utils.service';
import { ValidatorsService } from 'services/validators.service';
import { VoiceoverObjectFactory } from
  'domain/exploration/VoiceoverObjectFactory';
import { WindowDimensionsService } from
  'services/contextual/window-dimensions.service';
import { WindowRef } from 'services/contextual/window-ref.service';
import { WinnowingPreprocessingService } from
  'classifiers/winnowing-preprocessing.service';
import { WrittenTranslationObjectFactory } from
  'domain/exploration/WrittenTranslationObjectFactory';
import { WrittenTranslationsObjectFactory } from
  'domain/exploration/WrittenTranslationsObjectFactory';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpgradedServices {
  getUpgradedServices() {
    var upgradedServices = {};
    /* eslint-disable dot-notation */

    // Group 1: Services without dependencies.
    upgradedServices['AngularNameService'] = new AngularNameService();
    upgradedServices['AnswerClassificationResultObjectFactory'] =
      new AnswerClassificationResultObjectFactory();
    upgradedServices['AudioLanguageObjectFactory'] =
      new AudioLanguageObjectFactory();
    upgradedServices['AutogeneratedAudioLanguageObjectFactory'] =
      new AutogeneratedAudioLanguageObjectFactory();
    upgradedServices['BackgroundMaskService'] = new BackgroundMaskService();
    upgradedServices['baseInteractionValidationService'] =
      new baseInteractionValidationService();
    upgradedServices['BrowserCheckerService'] = new BrowserCheckerService(
      new WindowRef());
    upgradedServices['CamelCaseToHyphensPipe'] = new CamelCaseToHyphensPipe();
    upgradedServices['ClassifierObjectFactory'] = new ClassifierObjectFactory();
    upgradedServices['CodeNormalizerService'] = new CodeNormalizerService();
    upgradedServices['ComputeGraphService'] = new ComputeGraphService();
    upgradedServices['CountVectorizerService'] = new CountVectorizerService();
    upgradedServices['CsrfTokenService'] = new CsrfTokenService();
    upgradedServices['DateTimeFormatService'] = new DateTimeFormatService();
    upgradedServices['DebouncerService'] = new DebouncerService();
    upgradedServices['DebugInfoTrackerService'] =
      new DebugInfoTrackerService();
    upgradedServices['EditabilityService'] = new EditabilityService();
    upgradedServices['EmailDashboardDataService'] =
      new EmailDashboardDataService(
        new HttpClient(new HttpXhrBackend(
          new ɵangular_packages_common_http_http_d())));
    upgradedServices['EntityContextObjectFactory'] =
      new EntityContextObjectFactory();
    upgradedServices['ExplorationDiffService'] = new ExplorationDiffService();
    upgradedServices['ExplorationDraftObjectFactory'] =
      new ExplorationDraftObjectFactory();
    upgradedServices['ExplorationFeaturesService'] =
      new ExplorationFeaturesService();
    upgradedServices['ExpressionParserService'] = new ExpressionParserService();
    upgradedServices['FeedbackThreadObjectFactory'] =
      new FeedbackThreadObjectFactory();
    upgradedServices['FractionObjectFactory'] = new FractionObjectFactory();
    upgradedServices['GenerateContentIdService'] =
      new GenerateContentIdService();
    upgradedServices['IdGenerationService'] = new IdGenerationService();
    upgradedServices['ImprovementActionButtonObjectFactory'] =
      new ImprovementActionButtonObjectFactory();
    upgradedServices['LearnerActionObjectFactory'] =
      new LearnerActionObjectFactory();
    upgradedServices['LearnerAnswerDetailsObjectFactory'] =
      new LearnerAnswerDetailsObjectFactory();
    upgradedServices['LearnerAnswerInfoObjectFactory'] =
      new LearnerAnswerInfoObjectFactory();
    upgradedServices['LearnerDashboardActivityIdsObjectFactory'] =
      new LearnerDashboardActivityIdsObjectFactory();
    upgradedServices['LoggerService'] = new LoggerService();
    upgradedServices['NormalizeWhitespacePunctuationAndCasePipe'] =
      new NormalizeWhitespacePunctuationAndCasePipe();
    upgradedServices['ParamChangeObjectFactory'] =
      new ParamChangeObjectFactory();
    upgradedServices['ParamMetadataObjectFactory'] =
      new ParamMetadataObjectFactory();
    upgradedServices['ParamTypeObjectFactory'] =
      new ParamTypeObjectFactory();
    upgradedServices['PlaythroughIssueObjectFactory'] =
      new PlaythroughIssueObjectFactory();
    upgradedServices['ReadOnlyStoryNodeObjectFactory'] =
      new ReadOnlyStoryNodeObjectFactory();
    upgradedServices['RuleObjectFactory'] = new RuleObjectFactory();
    upgradedServices['StateImprovementSuggestionService'] =
      new StateImprovementSuggestionService();
    upgradedServices['SolutionValidityService'] = new SolutionValidityService();
    upgradedServices['StopwatchObjectFactory'] = new StopwatchObjectFactory();
    upgradedServices['StorySummaryObjectFactory'] =
      new StorySummaryObjectFactory();
    upgradedServices['SubtitledHtmlObjectFactory'] =
      new SubtitledHtmlObjectFactory();
    upgradedServices['SuggestionModalService'] = new SuggestionModalService();
    upgradedServices['SuggestionObjectFactory'] = new SuggestionObjectFactory();
    upgradedServices['ThreadStatusDisplayService'] =
      new ThreadStatusDisplayService();
    upgradedServices['UnitsObjectFactory'] = new UnitsObjectFactory();
    upgradedServices['UserInfoObjectFactory'] = new UserInfoObjectFactory();
    upgradedServices['UtilsService'] = new UtilsService();
    upgradedServices['VoiceoverObjectFactory'] = new VoiceoverObjectFactory();
    upgradedServices['WindowDimensionsService'] = new WindowDimensionsService(
      new WindowRef());
    upgradedServices['WindowRef'] = new WindowRef();
    upgradedServices['WinnowingPreprocessingService'] =
      new WinnowingPreprocessingService();
    upgradedServices['WrittenTranslationObjectFactory'] =
      new WrittenTranslationObjectFactory();

    // Group 2: Services depending only on group 1.
    upgradedServices['AlertsService'] =
      new AlertsService(upgradedServices['LoggerService']);
    upgradedServices['ChangesInHumanReadableFormService'] =
      new ChangesInHumanReadableFormService(
        upgradedServices['UtilsService'], document);
    upgradedServices['DeviceInfoService'] =
      new DeviceInfoService(upgradedServices['WindowRef']);
    upgradedServices['DocumentAttributeCustomizationService'] =
      new DocumentAttributeCustomizationService(upgradedServices['WindowRef']);
    upgradedServices['HintObjectFactory'] =
      new HintObjectFactory(upgradedServices['SubtitledHtmlObjectFactory']);
    upgradedServices['HtmlEscaperService'] =
      new HtmlEscaperService(upgradedServices['LoggerService']);
    upgradedServices['LanguageUtilService'] = new LanguageUtilService(
      upgradedServices['AudioLanguageObjectFactory'],
      upgradedServices['AutogeneratedAudioLanguageObjectFactory'],
      upgradedServices['BrowserCheckerService']);
    upgradedServices['LocalStorageService'] = new LocalStorageService(
      upgradedServices['ExplorationDraftObjectFactory']);
    upgradedServices['MetaTagCustomizationService'] =
      new MetaTagCustomizationService(upgradedServices['WindowRef']);
    upgradedServices['NumberWithUnitsObjectFactory'] =
      new NumberWithUnitsObjectFactory(
        upgradedServices['UnitsObjectFactory'],
        upgradedServices['FractionObjectFactory']);
    upgradedServices['NormalizeWhitespacePipe'] = new NormalizeWhitespacePipe(
      upgradedServices['UtilsService']);
    upgradedServices['OutcomeObjectFactory'] =
      new OutcomeObjectFactory(upgradedServices['SubtitledHtmlObjectFactory']);
    upgradedServices['ParamChangesObjectFactory'] =
      new ParamChangesObjectFactory(
        upgradedServices['ParamChangeObjectFactory']);
    upgradedServices['ParamSpecObjectFactory'] =
      new ParamSpecObjectFactory(upgradedServices['ParamTypeObjectFactory']);
    upgradedServices['PlayerTranscriptService'] = new PlayerTranscriptService(
      upgradedServices['LoggerService']);
    upgradedServices['PlaythroughObjectFactory'] =
      new PlaythroughObjectFactory(
        upgradedServices['LearnerActionObjectFactory']);
    upgradedServices['RecordedVoiceoversObjectFactory'] =
        new RecordedVoiceoversObjectFactory(
          upgradedServices['VoiceoverObjectFactory']);
    upgradedServices['SkillSummaryObjectFactory'] =
        new SkillSummaryObjectFactory();
    upgradedServices['SidebarStatusService'] =
      new SidebarStatusService(upgradedServices['WindowDimensionsService']);
    upgradedServices['SiteAnalyticsService'] =
      new SiteAnalyticsService(upgradedServices['WindowRef']);
    upgradedServices['SuggestionThreadObjectFactory'] =
        new SuggestionThreadObjectFactory(
          upgradedServices['SuggestionObjectFactory']);
    upgradedServices['StateClassifierMappingService'] =
      new StateClassifierMappingService(
        upgradedServices['ClassifierObjectFactory']);
    upgradedServices['StateEditorService'] =
      new StateEditorService(upgradedServices['SolutionValidityService']);
    upgradedServices['StoryPlaythroughObjectFactory'] =
      new StoryPlaythroughObjectFactory(
        upgradedServices['ReadOnlyStoryNodeObjectFactory']);
    new StateEditorService(upgradedServices['SolutionValidityService']);
    upgradedServices['StoryReferenceObjectFactory'] =
        new StoryReferenceObjectFactory();
    upgradedServices['TextInputValidationService'] =
      new TextInputValidationService(
        upgradedServices['baseInteractionValidationService']);
    upgradedServices['TopicSummaryObjectFactory'] =
        new TopicSummaryObjectFactory();
    upgradedServices['UrlService'] =
      new UrlService(upgradedServices['WindowRef']);
    upgradedServices['ValidatorsService'] = new ValidatorsService(
      upgradedServices['AlertsService'],
      upgradedServices['NormalizeWhitespacePipe']);
    upgradedServices['WrittenTranslationsObjectFactory'] =
      new WrittenTranslationsObjectFactory(
        upgradedServices['WrittenTranslationObjectFactory']);
    upgradedServices['PythonProgramTokenizer'] =
      new PythonProgramTokenizer(upgradedServices['LoggerService']);

    // Group 3: Services depending only on groups 1-2.
    upgradedServices['AnswerGroupObjectFactory'] =
      new AnswerGroupObjectFactory(
        upgradedServices['OutcomeObjectFactory'],
        upgradedServices['RuleObjectFactory']);
    upgradedServices['AudioTranslationLanguageService'] =
        new AudioTranslationLanguageService(
          upgradedServices['BrowserCheckerService'],
          upgradedServices['LanguageUtilService']);
    upgradedServices['CodeReplPredictionService'] =
      new CodeReplPredictionService(
        upgradedServices['CountVectorizerService'],
        upgradedServices['PythonProgramTokenizer'],
        upgradedServices['SVMPredictionService'],
        upgradedServices['WinnowingPreprocessingService']);
    upgradedServices['CodeReplRulesService'] = new CodeReplRulesService(
      upgradedServices['NormalizeWhitespacePipe'],
      upgradedServices['CodeNormalizerService']);
    upgradedServices['ConceptCardObjectFactory'] = new ConceptCardObjectFactory(
      upgradedServices['SubtitledHtmlObjectFactory'],
      upgradedServices['RecordedVoiceoversObjectFactory']);
    upgradedServices['ContextService'] = new ContextService(
      upgradedServices['UrlService'],
      upgradedServices['EntityContextObjectFactory']);
    upgradedServices['EditorFirstTimeEventsService'] =
      new EditorFirstTimeEventsService(
        upgradedServices['SiteAnalyticsService']);
    upgradedServices['ExtensionTagAssemblerService'] =
      new ExtensionTagAssemblerService(
        upgradedServices['HtmlEscaperService'],
        upgradedServices['CamelCaseToHyphensPipe']);
    upgradedServices['ExtractImageFilenamesFromStateService'] =
        new ExtractImageFilenamesFromStateService(
          upgradedServices['HtmlEscaperService']);
    upgradedServices['ParamSpecsObjectFactory'] = new ParamSpecsObjectFactory(
      upgradedServices['ParamSpecObjectFactory']);
    upgradedServices['PencilCodeEditorRulesService'] =
      new PencilCodeEditorRulesService(
        upgradedServices['NormalizeWhitespacePipe'],
        upgradedServices['NormalizeWhitespacePunctuationAndCasePipe'],
        upgradedServices['CodeNormalizerService']);
    upgradedServices['PlayerPositionService'] = new PlayerPositionService(
      upgradedServices['ContextService'],
      upgradedServices['PlayerTranscriptService']);
    upgradedServices['StateContentService'] = new StateContentService(
      upgradedServices['AlertsService'], upgradedServices['UtilsService']);
    upgradedServices['StateCustomizationArgsService'] =
      new StateCustomizationArgsService(
        upgradedServices['AlertsService'], upgradedServices['UtilsService']);
    upgradedServices['StateHintsService'] = new StateHintsService(
      upgradedServices['AlertsService'], upgradedServices['UtilsService']);
    upgradedServices['StateInteractionIdService'] =
      new StateInteractionIdService(
        upgradedServices['AlertsService'], upgradedServices['UtilsService']);
    upgradedServices['StatePropertyService'] = new StatePropertyService(
      upgradedServices['AlertsService'], upgradedServices['UtilsService']);
    upgradedServices['StateRecordedVoiceoversService'] =
      new StateRecordedVoiceoversService(
        upgradedServices['AlertsService'], upgradedServices['UtilsService']);
    upgradedServices['StateSolicitAnswerDetailsService'] =
      new StateSolicitAnswerDetailsService(
        upgradedServices['AlertsService'], upgradedServices['UtilsService']);
    upgradedServices['StateSolutionService'] = new StateSolutionService(
      upgradedServices['AlertsService'], upgradedServices['UtilsService']);
    upgradedServices['StateWrittenTranslationsService'] =
        new StateWrittenTranslationsService(
          upgradedServices['AlertsService'], upgradedServices['UtilsService']);
    upgradedServices['SubtopicObjectFactory'] = new SubtopicObjectFactory(
      upgradedServices['SkillSummaryObjectFactory']);
    upgradedServices['TextInputRulesService'] = new TextInputRulesService(
      upgradedServices['NormalizeWhitespacePipe']);
    upgradedServices['UrlInterpolationService'] = new UrlInterpolationService(
      upgradedServices['AlertsService'], upgradedServices['UrlService'],
      upgradedServices['UtilsService']);

    // Group 4: Services depending on groups 1,2 and 3.
    upgradedServices['ExplorationHtmlFormatterService'] =
      new ExplorationHtmlFormatterService(
        upgradedServices['CamelCaseToHyphensPipe'],
        upgradedServices['ExtensionTagAssemblerService'],
        upgradedServices['HtmlEscaperService']);
    upgradedServices['StateCardObjectFactory'] =
        new StateCardObjectFactory(
          upgradedServices['AudioTranslationLanguageService']);
    upgradedServices['TopicObjectFactory'] = new TopicObjectFactory(
      upgradedServices['SubtopicObjectFactory'],
      upgradedServices['StoryReferenceObjectFactory'],
      upgradedServices['SkillSummaryObjectFactory']);

    // Group 5: Services depending on groups 1-4.
    upgradedServices['SolutionObjectFactory'] =
      new SolutionObjectFactory(
        upgradedServices['SubtitledHtmlObjectFactory'],
        upgradedServices['ExplorationHtmlFormatterService']);

    // Group 6: Services depending on groups 1-5.
    upgradedServices['InteractionObjectFactory'] =
      new InteractionObjectFactory(
        upgradedServices['AnswerGroupObjectFactory'],
        upgradedServices['HintObjectFactory'],
        upgradedServices['SolutionObjectFactory'],
        upgradedServices['OutcomeObjectFactory']);

    // Group 7: Services depending on groups 1-6.
    upgradedServices['StateObjectFactory'] = new StateObjectFactory(
      upgradedServices['InteractionObjectFactory'],
      upgradedServices['ParamChangesObjectFactory'],
      upgradedServices['RecordedVoiceoversObjectFactory'],
      upgradedServices['SubtitledHtmlObjectFactory'],
      upgradedServices['WrittenTranslationsObjectFactory']);

    // Group 8: Services depending on groups 1-7.
    upgradedServices['StatesObjectFactory'] = new StatesObjectFactory(
      upgradedServices['StateObjectFactory']);

    // Group 9: Services depending on groups 1-8.
    upgradedServices['ExplorationObjectFactory'] =
      new ExplorationObjectFactory(
        upgradedServices['LoggerService'],
        upgradedServices['ParamChangesObjectFactory'],
        upgradedServices['ParamSpecsObjectFactory'],
        upgradedServices['StatesObjectFactory'],
        upgradedServices['UrlInterpolationService']);
    /* eslint-enable dot-notation */
    return upgradedServices;
  }
}

angular.module('oppia').factory(
  'UpgradedServices',
  downgradeInjectable(UpgradedServices));
