import '../../../public/index.css';

import { action } from '@storybook/addon-actions';

import PillButton from './PillButton.svelte';

export default {
    title: 'PillButton',
};

export const text = () => ({
    Component: PillButton,
    props: { title: 'Hello Button' },
    on: { click: action('clicked') },
});

export const emoji = () => ({
    Component: PillButton,
    props: {
        title: '😀 😎 👍 💯',
    },
    on: { click: action('clicked') },
});
