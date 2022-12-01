import { css } from "@emotion/react";

const styles = {
  global: css`
    body {
      font-size: 16px;
      font-family: "Mark Pro";
      line-height: normal;
      letter-spacing: normal;
      margin: 0;
    }

    @font-face {
      font-family: "Mark Pro";
      src: url("fonts/MarkPro/MarkPro.ttf");
      font-display: swap;
      font-style: normal;
      font-weight: normal;
    }

    @font-face {
      font-family: "Mark Pro";
      src: url("fonts/MarkPro/MarkPro.woff");
      font-display: swap;
      font-style: normal;
      font-weight: normal;
    }

    @font-face {
      font-family: "Mark Pro";
      src: url("fonts/MarkPro/MarkPro-Bold.ttf");
      font-display: swap;
      font-style: normal;
      font-weight: bold;
    }

    @font-face {
      font-family: "Mark Pro";
      src: url("fonts/MarkPro/MarkPro-Bold.woff");
      font-display: swap;
      font-style: normal;
      font-weight: bold;
    }
  `,
};

export default styles;
