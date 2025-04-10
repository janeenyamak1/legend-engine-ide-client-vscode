/**
 * Copyright (c) 2023-present, Goldman Sachs
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { strictEqual, throws } from 'assert';
import {
  guaranteeNonNullable,
  isBoolean,
  isObject,
} from '@finos/legend-engine-ide-client-vscode-shared';

suite('Assertion Test Suite', () => {
  test('Assert non nullable value', async () => {
    throws(() => guaranteeNonNullable(null), Error);
    strictEqual(guaranteeNonNullable(0), 0);
    strictEqual(guaranteeNonNullable('String'), 'String');
  });

  test('Assert on types', () => {
    strictEqual(isBoolean(true), true);
    strictEqual(isBoolean('true'), false);
    strictEqual(isObject({}), true);
  });
});
