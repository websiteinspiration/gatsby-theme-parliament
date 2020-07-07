/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import React from 'react';
import {css} from '@emotion/core';
import '@spectrum-css/typography/dist/index-vars.css';
import '@spectrum-css/well/dist/index-vars.css';

export const InlineCode = ({children, ...props}) => (
  <code {...props}
        className="spectrum-Code4 spectrum-Well"
        css={css`
          padding: 0 var(--spectrum-global-dimension-static-size-50);
          display: inline-block;
          min-width: auto;
        `}>
    {children}
  </code>
)