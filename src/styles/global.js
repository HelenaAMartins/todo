import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Margin and padding reset */
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
dl,
dd,
figure,
blockquote,
fieldset,
legend {
  margin: 0;
  padding: 0;
}

/* List reset */
ul,
ol {
  list-style: none;
}

/* Text reset */
a,
button,
input,
select,
textarea {
  text-decoration: none;
  color: inherit;
}

/* Form element reset */
button,
input,
optgroup,
select,
textarea {
  margin: 0;
  font: inherit;
  color: inherit;
}

/* Reset other elements */
img,
embed,
iframe,
object,
audio,
video {
  display: block;
}

/* Reset links */
a {
  color: inherit;
  cursor: pointer;
}

/* Remove default outline on focus for some browsers */
a,
button,
input,
textarea {
  outline: none;
}

/* Set the base font size to 16px and line height to 1.5 */
body {
  font-family: 'PT Sans', sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

/* Ensure the viewport takes the full width available */
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  background: #f7f7f7; /* Cor de fundo geral */
  background-image: linear-gradient(#f3e8ff 1px, transparent 1px);
  background-size: 100% 30px; /* Tamanho das linhas (largura total, altura 20px) */
}
`;

export default GlobalStyle;
