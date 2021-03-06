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
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import { Flex } from '@react-spectrum/layout';
import { View } from '@react-spectrum/view';
import { Button } from './Button';

const Feedback = ({ onYes, onNo }) => (
  <Flex alignItems="center">
    <span
      css={css`
        padding-right: var(--spectrum-global-dimension-static-size-200);
      `}>
      Was this helpful ?
    </span>
    <Flex>
      <View marginEnd="size-200">
        <Button
          variant="primary"
          className="feedback-yes"
          onClick={() => {
            onYes && onYes();
          }}>
          Yes
        </Button>
      </View>
      <View>
        <Button
          className="feedback-no"
          variant="primary"
          onClick={() => {
            onNo && onNo();
          }}>
          No
        </Button>
      </View>
    </Flex>
  </Flex>
);

Feedback.propTypes = {
  onYes: PropTypes.func,
  onNo: PropTypes.func
};

export { Feedback };
