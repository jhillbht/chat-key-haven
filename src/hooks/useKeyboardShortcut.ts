import { useEffect, useCallback } from 'react';

type KeyCombo = {
    key: string;
    ctrlKey?: boolean;
    metaKey?: boolean;
    shiftKey?: boolean;
    altKey?: boolean;
};

export function useKeyboardShortcut(
    keyCombo: KeyCombo | KeyCombo[],
    callback: () => void,
    options: { enabled?: boolean } = {}
) {
    const { enabled = true } = options;

    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            const combos = Array.isArray(keyCombo) ? keyCombo : [keyCombo];

            const matchesCombo = combos.some(combo => {
                const modifiersMatch =
                    (combo.ctrlKey === undefined || event.ctrlKey === combo.ctrlKey) &&
                    (combo.metaKey === undefined || event.metaKey === combo.metaKey) &&
                    (combo.shiftKey === undefined || event.shiftKey === combo.shiftKey) &&
                    (combo.altKey === undefined || event.altKey === combo.altKey);

                return event.key === combo.key && modifiersMatch;
            });

            if (matchesCombo) {
                event.preventDefault();
                callback();
            }
        },
        [keyCombo, callback]
    );

    useEffect(() => {
        if (!enabled) return;

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [enabled, handleKeyDown]);
} 