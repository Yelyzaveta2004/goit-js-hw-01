function getElementWidth(content, padding, border) {
  // Конвертуємо значення параметрів у числа
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding);
  const borderWidth = parseFloat(border);

  // Розраховуємо загальну ширину елемента
  const totalWidth = contentWidth + (paddingWidth * 2) + (borderWidth * 2);

  // Повертаємо результат
  return totalWidth;
}