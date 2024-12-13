import type { Preview } from '@storybook/react';
import '../src/index.css'; // Tailwind CSS 파일

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;