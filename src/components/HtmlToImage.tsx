import React from 'react';
import { toPng } from 'html-to-image';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HtmlToImage = React.forwardRef<HTMLDivElement>(
  (_props, ref): JSX.Element => {
    async function captureComponent() {
      if (!ref || typeof ref === 'function') return;
      if (!ref.current) return;

      const params = {
        backgroundColor: 'white',
        style: { margin: '0' },
      };

      const capture = await toPng(ref.current, params);
      const link = document.createElement('a');
      link.download = 'CV.png';
      link.href = capture;
      link.click();
    }

    return (
      <button
        aria-label="Download as image"
        type="button"
        onClick={() => captureComponent()}
      >
        Download as image
      </button>
    );
  }
);

export default HtmlToImage;
