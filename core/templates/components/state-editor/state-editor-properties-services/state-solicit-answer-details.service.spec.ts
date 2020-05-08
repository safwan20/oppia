// Copyright 2020 The Oppia Authors. All Rights Reserved.
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
 * @fileoverview Unit test for the State Solicit Answer Details Service.
 */

import { TestBed } from '@angular/core/testing';
/* eslint-disable max-len */
import { StateSolicitAnswerDetailsService } from
  'components/state-editor/state-editor-properties-services/state-solicit-answer-details.service';
/* eslint-enable max-len */

describe('State Solicit Answer Details Service', () => {
  let ssads: StateSolicitAnswerDetailsService = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StateSolicitAnswerDetailsService]
    });

    ssads = TestBed.get(StateSolicitAnswerDetailsService);
  });

  it('should test the setterMethodKey property.', () => {
    expect(ssads.setterMethodKey).toBe('saveSolicitAnswerDetails');
  });
});
