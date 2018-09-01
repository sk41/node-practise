# ccs

## Selector 
  - ### type selector 

    The most common and easy to understand selectors are type selectors. This selector targets element types on the page.

    For example, to target all the paragraphs on the page:
    ```
    p {
        color: red;
        font-size:130%;
    }
    ```

- ### id selector  
  **id selectors** allow you to style an HTML element that has an id attribute, regardless of their position in the document tree. Here is an example of an id selector:

  css
  ```
  #intro {
    color: yellow;
    background-color: red;
  }
  ```

  ```
  <div id="intro">
    <p> This paragraph is in the intro section.</p>
  </div>
  <p> This paragraph is not in the intro section.</p>
  ```

  *To select an element with a specific id, use a hash character, and then follow it with the id of the element.*

- ### class selector  
  **Class selectors** work in a similar way. The major difference is that IDs can only be applied once per page, while classes can be used as many times on a page as needed. 

  **CSS**
  ```
  #intro {
    color: white;
    background-color: gray;
  }
  ```

  **HTML**
  ```
  <div>
    <p class="first">This is a paragraph</p>
    <p> This is the second paragraph. </p>
  </div>
  <p class="first"> This is not in the intro section</p>
  <p> The second paragraph is not in the intro section. </p>

  ```

### Descendant elements  
  These selectors are used to select elements that are descendants of another element. When selecting levels, you can select as many levels deep as you need to.

  For example, to target only `<em>` elements in the first paragraph of the `intro` section:

  HTML
  ```
  <div id="intro">
    <p class="first">This is a <em> paragraph.</em></p>
    <p> This is the second paragraph. </p>
  </div>
  <p class="first"> This is not in the intro section.</p>
  <p> The second paragraph is not in the intro section. </p>

  ```

  CSS
  ```
  #intro .first em {
    color: pink; 
    background-color:gray;
  }
  ```