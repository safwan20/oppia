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
 * @fileoverview Unit tests for the ExplorationCategoryService.
 */

// TODO(#7222): Remove the following block of unnnecessary imports once
// the code corresponding to the spec is upgraded to Angular 8.
import { UpgradedServices } from 'services/UpgradedServices';
// ^^^ This block is to be removed.

require('pages/exploration-editor-page/' +
  'services/exploration-category.service.spec.ts');

describe('Exploration Category Service', function() {
  var ecs = null;

  beforeEach(function() {
    angular.mock.module('oppia');
    angular.mock.module(function($provide) {
      var ugs = new UpgradedServices();
      for (let [key, value] of Object.entries(ugs.getUpgradedServices())) {
        $provide.value(key, value);
      }
    });

    angular.mock.inject(function($injector) {
      ecs = $injector.get('ExplorationCategoryService');
    });
  });

  it('tests the child object properties', function() {
    expect(ecs.propertyName).toBe('category');
    expect(ecs._isValid('Algorithms')).toBe(true);
    var NotNormalize = '   Exploration             Category Service     ';
    var Normalize = 'Exploration Category Service';
    expect(ecs._normalize(NotNormalize)).toBe(Normalize);
  });
});
