  const contentArea = document.getElementById('content-area');
  const bgColor1 = document.getElementById('bg-color1');
  const bgColor2 = document.getElementById('bg-color2');
  const boldCheckbox = document.getElementById('bold');
  const italicCheckbox = document.getElementById('italic');
  const underlineCheckbox = document.getElementById('underline');
  const fontSizeSelect = document.getElementById('font-size');

  function applyStyles() {
      if (bgColor1.checked) {
          contentArea.style.backgroundColor = 'lightblue';
      } else if (bgColor2.checked) {
          contentArea.style.backgroundColor = 'lightgreen';
      } else {
          contentArea.style.backgroundColor = ''; 
      }

      contentArea.style.fontWeight = boldCheckbox.checked ? 'bold' : 'normal';
      contentArea.style.fontStyle = italicCheckbox.checked ? 'italic' : 'normal';
      contentArea.style.textDecoration = underlineCheckbox.checked ? 'underline' : 'none';

      contentArea.style.fontSize = fontSizeSelect.value;
  }

  bgColor1.addEventListener('change', applyStyles);
  bgColor2.addEventListener('change', applyStyles);
  boldCheckbox.addEventListener('change', applyStyles);
  italicCheckbox.addEventListener('change', applyStyles);
  underlineCheckbox.addEventListener('change', applyStyles);
  fontSizeSelect.addEventListener('change', applyStyles);

  applyStyles();