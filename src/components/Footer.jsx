// THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform(Stack Overflow, Twitter)

//Application has a single Footer component that appears on multiple pages.

import React from "react";

function Footer() {
  return (
    <footer>
      <div>
        <link>Github</link>
        <a target="_blank" href="https://icons8.com/icon/12598/github">
          GitHub
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
        <link>LinkedIn</link>
        <a target="_blank" href="https://icons8.com/icon/447/linkedin">
          LinkedIn
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
        <link>Instagram</link>
        <a target="_blank" href="https://icons8.com/icon/32292/instagram">
          Instagram
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
      </div>
    </footer>
  );
}

export default Footer;
