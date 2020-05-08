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
 * @fileoverview Unit test for the State Solution Service.
 */

import { TestBed } from '@angular/core/testing';
/* eslint-disable max-len */
import { StateSolutionService } from
  'components/state-editor/state-editor-properties-services/state-solution.service';
/* eslint-enable max-len */

fdescribe('State Solution Service', () => {
  let sss: StateSolutionService = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StateSolutionService]
    });

    sss = TestBed.get(StateSolutionService);
  });

  it('should test the setterMethodKey property.', () => {
    expect(sss.setterMethodKey).toBe('saveSolution');
  });
});
