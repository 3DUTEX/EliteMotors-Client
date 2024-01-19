/**
 *
 * @param {string} flexD flex-direction
 * @param {string} justifyC justify-content
 * @param {string} alignI align-items
 * @param {string} gap gap
 * @returns string
 */
export const mixinFlex = (flexD = 'row', justifyC = 'initial', alignI = 'initial', gap = '0') => `
    display: flex;
    flex-direction: ${flexD};
    justify-content: ${justifyC};
    align-items: ${alignI};
    gap: ${gap};
  `;
