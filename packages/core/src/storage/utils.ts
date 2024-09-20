// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { InMemoryStorage } from './InMemoryStorage';

/**
 * @internal
 * @returns Either a reference to window.localStorage or an in-memory storage as fallback
 */
export const getLocalStorageWithFallback = (): Storage => {
  try {
    // Attempt to use localStorage directly
    if (typeof window !== 'undefined' && window.localStorage) {
      // Test if localStorage is accessible
      return window.localStorage;
    }
  } catch (e) {
    // Handle any errors related to localStorage access
    console.error('LocalStorage access failed:', e);
  }

  // Return in-memory storage as a fallback if localStorage is not accessible
  return new InMemoryStorage();
};

/**
 * @internal
 * @returns Either a reference to window.sessionStorage or an in-memory storage as fallback
 */
export const getSessionStorageWithFallback = (): Storage => {
  try {
    // Attempt to use localStorage directly
    if (typeof window !== 'undefined' && window.sessionStorage) {
      // Test if localStorage is accessible
      return window.sessionStorage;
    }
  } catch (e) {
    // Handle any errors related to localStorage access
    console.error('LocalStorage access failed:', e);
  }

  // Return in-memory storage as a fallback if localStorage is not accessible
  return new InMemoryStorage();
};
