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
 * @fileoverview Page object for the exploration editor's improvements tab, for
 *  use in Protractor tests.
 */

var forms = require('./forms.js');
var general = require('./general.js');
var interactions = require('../../../extensions/interactions/protractor.js');
var ruleTemplates = require(
  '../../../extensions/interactions/rule_templates.json');
var waitFor = require('../protractor_utils/waitFor.js');

var ExplorationEditorImprovementsTab = function() {
  var allTasks = $$('.protractor-test-improvements-task');
  var allThreadMessages =
    $$('.protractor-test-improvements-thread-message-body');

  var taskCount = $('.protractor-test-improvements-tab-task-count');
  var onlyOpenInput = $('.protractor-test-improvements-only-open-input');
  var confirmModalButton = $('.protractor-test-confirm-button');
  var closeModalButton = $('.protractor-test-improvements-close-modal-button');

  var answerDetails = $('.protractor-test-improvements-answer-details');
  var answerInfoCount = $('.protractor-test-improvements-answer-info-count');

  var responseTextarea = $('.protractor-test-improvements-response-textarea');
  var responseStatusSelect =
    $('.protractor-test-improvements-response-status-select');
  var responseSendButton =
    $('.protractor-test-improvements-response-send-button');
  var reviewSuggestionButton =
    $('.protractor-test-improvements-review-suggestion-button');

  var acceptSuggestionButton =
    $('.protractor-test-exploration-accept-suggestion-btn');
  var rejectSuggestionButton =
    $('.protractor-test-exploration-reject-suggestion-btn');
  var suggestionReviewMessageInput =
    $('.protractor-test-suggestion-review-message');
  var suggestionCommitMessageInput =
    $('.protractor-test-suggestion-commit-message');

  var actionButtonLocator =
    by.css('.protractor-test-improvements-action-button');
  var taskBodyLocator = by.css('.protractor-test-improvements-task-body');
  var taskStatusLocator = by.css('.protractor-test-improvements-task-status');
  var taskTitleLocator = by.css('.protractor-test-improvements-task-title');
  var stateNameLocator =
    by.css('.protractor-test-improvements-task-state-name');

  var newTaskStateNameMatcher = function(expectedStateName) {
    return function(task) {
      return task.element(stateNameLocator).getText()
        .then(stateName => stateName === expectedStateName);
    };
  };

  var newTaskTypeMatcher = function(expectedTaskType) {
    return function(task) {
      return task.getAttribute('class')
        .then(cssClass => cssClass.includes(expectedTaskType));
    };
  };

  var newTaskContentMatcher = function(expectedContent) {
    return function(task) {
      return task.element(taskBodyLocator).getText()
        .then(taskBody => taskBody.includes(expectedContent));
    };
  };

  var newTaskTitleMatcher = function(expectedTitle) {
    return function(task) {
      return task.element(taskTitleLocator).getText()
        .then(taskTitle => taskTitle.includes(expectedTitle));
    };
  };

  var newTaskStatusMatcher = function(expectedStatus) {
    return function(task) {
      return task.element(taskStatusLocator).getText()
        .then(taskStatus => taskStatus === expectedStatus);
    };
  };

  /**
   * Combines a collection of matchers into a single one which requires all of
   * them to pass.
   *
   * @param {Iterable.<(ElementFinder) => Promise.<boolean>>} matchers
   * @returns {(ElementFinder) => Promise.<boolean>}
   */
  var reduceTaskMatchers = function(matchers) {
    return function(task) {
      return Promise.all(matchers.map(isMatch => isMatch(task)))
        .then(matchResults => matchResults.every(m => m));
    };
  };

  this.getTaskByStatus = function(expectedStatus) {
    return allTasks.filter(newTaskStatusMatcher(expectedStatus)).first();
  };

  this.getAnswerDetailsTask = function(stateName) {
    var answerDetailsTaskMatcher = reduceTaskMatchers([
      newTaskTypeMatcher('answer-details'),
      newTaskStateNameMatcher(stateName),
    ]);
    return allTasks.filter(answerDetailsTaskMatcher).first();
  };

  this.getFeedbackTask = function(latestMessage) {
    var feedbackTaskMatcher = reduceTaskMatchers([
      newTaskTypeMatcher('feedback'),
      newTaskContentMatcher(latestMessage),
    ]);
    return allTasks.filter(feedbackTaskMatcher).first();
  };

  this.getSuggestionTask = function(description) {
    var suggestionTaskMatcher = reduceTaskMatchers([
      newTaskTypeMatcher('suggestion'),
      newTaskContentMatcher(description),
    ]);
    return allTasks.filter(suggestionTaskMatcher).first();
  };

  this.getPlaythroughTask = function(taskTitle) {
    var playthroughTaskMatcher = reduceTaskMatchers([
      newTaskTypeMatcher('playthrough'),
      newTaskTitleMatcher(taskTitle),
    ]);
    return allTasks.filter(playthroughTaskMatcher).first();
  };

  this.getTasks = function() {
    return allTasks;
  };

  this.getTaskStatus = function(task) {
    return task.element(taskStatusLocator).getText();
  };

  this.clickTaskActionButton = function(task, buttonText) {
    var buttonElement = task.element(by.buttonText(buttonText));
    waitFor.elementToBeClickable(
      buttonElement, 'Action button takes too long to become clickable');
    buttonElement.click();
  };

  this.getTaskActionButtons = function(task) {
    return task.all(actionButtonLocator);
  };

  this.verifyOutstandingTaskCount = function(expectedTaskCount) {
    expect(taskCount.getText()).toMatch(String(expectedTaskCount));
  };

  this.verifyNoOutstandingTasks = function() {
    expect(taskCount.isDisplayed()).toBe(false);
  };

  this.verifyAnswerDetails = function(expectedDetails, expectedInfoCount) {
    expect(answerDetails.getText()).toMatch(expectedDetails);
    expect(answerInfoCount.getText()).toMatch(String(expectedInfoCount));
  };

  this.verifyReadOnlyAnswerDetails = function(
      expectedDetails, expectedInfoCount) {
    this.verifyAnswerDetails(expectedDetails, expectedInfoCount);
    expect($$('.protractor-test-delete-items').count()).toEqual(0);
    expect($$('.protractor-test-select-answer-detail').count()).toEqual(0);
  };

  this.getThreadMessages = function() {
    return allThreadMessages.map(message => message.getText());
  };

  this.sendResponseAndCloseModal = function(feedbackResponse, feedbackStatus) {
    responseTextarea.sendKeys(feedbackResponse);
    if (feedbackStatus) {
      responseStatusSelect.click();
      $('option[label="' + feedbackStatus + '"]').click();
    }
    responseSendButton.click();
  };

  this.acceptSuggestion = function(commitMessage = 'Commit message') {
    waitFor.elementToBeClickable(
      reviewSuggestionButton,
      'View Suggestion button takes too long to become clickable');
    reviewSuggestionButton.click();

    suggestionCommitMessageInput.sendKeys(commitMessage);
    waitFor.elementToBeClickable(
      acceptSuggestionButton,
      'Accept Suggestion button takes too long to become clickable');
    acceptSuggestionButton.click();
  };

  this.rejectSuggestion = function(rejectReason = 'Commit message') {
    waitFor.elementToBeClickable(
      reviewSuggestionButton,
      'View Suggestion button takes too long to become clickable');
    reviewSuggestionButton.click();

    suggestionReviewMessageInput.sendKeys(rejectReason);
    waitFor.elementToBeClickable(
      rejectSuggestionButton,
      'Accept Suggestion button takes too long to become clickable');
    rejectSuggestionButton.click();
  };

  this.setShowOnlyOpenTasks = function(choice = true) {
    if (choice !== onlyOpenInput.isSelected()) {
      onlyOpenInput.click();
    }
  };

  this.confirmAction = function() {
    waitFor.elementToBeClickable(
      confirmModalButton, 'Confirm button takes too long to become clickable');
    confirmModalButton.click();
  };

  this.closeModal = function() {
    waitFor.elementToBeClickable(
      closeModalButton, 'Close button takes too long to become clickable');
    closeModalButton.click();
  };
};

exports.ExplorationEditorImprovementsTab = ExplorationEditorImprovementsTab;
