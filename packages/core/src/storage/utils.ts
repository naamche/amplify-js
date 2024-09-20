// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { InMemoryStorage } from './InMemoryStorage';

/**
 * @internal
 * @returns Either a reference to window.localStorage or an in-memory storage as fallback
 */
export const getLocalStorageWithFallback = (): Storage => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      return window.localStorage;
    }
  } catch {}
  return new InMemoryStorage();
};

/**
 * @internal
 * @returns Either a reference to window.sessionStorage or an in-memory storage as fallback
 */
export const getSessionStorageWithFallback = (): Storage => {
  try {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      return window.sessionStorage;
    }
  } catch{}
  return new InMemoryStorage();
};
