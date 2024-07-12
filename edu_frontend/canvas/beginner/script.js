const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
//realize a graphic
/**
 *
 * @param {type} marks  sert à définir le nombre de marque
 * @param {type} scale  sert à définir la valeur de chaque marque
 * @param {type} [parameterOptionnel] -- sert à définir l'unité
 * @param {*} label  sert à définir le titre
 */
function createAxeX(marks, scale, unit, label) {
  ctx.beginPath();
  ctx.moveTo(50, ctx.canvas.height - 50);
  ctx.lineTo(ctx.canvas.width - 50, ctx.canvas.height - 50);
  ctx.stroke();
  if (label) {
    ctx.textAlign = "center";
    ctx.fillText(label, ctx.canvas.width / 2, ctx.canvas.height - 10);
  }
  const distance = (ctx.canvas.width - 100) / marks;
  for (let i = 0; i <= marks; i++) {
    ctx.beginPath();
    ctx.moveTo(50 + i * distance, ctx.canvas.height - 50);
    ctx.lineTo(50 + i * distance, ctx.canvas.height - 45);
    ctx.stroke();
    ctx.textAlign = "center";
    if (unit)
      ctx.fillText(scale * i + unit, 50 + i * distance, ctx.canvas.height - 35);
    else ctx.fillText(scale * i, 50 + i * distance, ctx.canvas.height - 35);
  }
}

createAxeX(10, 100, "$", "incomes");
function drawVerticalText(ctx, text, x, y, spacing) {
  ctx.save();
  ctx.textAlign = "center";
  ctx.textBaseline = "middle"; // Alignement vertical au centre
  ctx.translate(x, y / 1.5);

  // Calculer la hauteur totale du texte
  let totalHeight = 0;

  for (const character of text) {
    const metrics = ctx.measureText(character);
    const characterHeight =
      metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;

    // Dessiner le caractère à la position verticale calculée
    ctx.fillText(character, 0, totalHeight);

    // Incrémenter la hauteur totale avec l'espacement
    totalHeight += characterHeight + spacing;
  }

  ctx.restore();
}
/**
 *
 * @param {type} marks  sert à définir le nombre de marque
 * @param {type} scale  sert à définir la valeur de chaque marque
 * @param {type} [parameterOptionnel]  sert à définir l'unité
 * @param {*} label  sert à définir le titre
 * @returns ??
 *@description cette fonction est utilisé pour créer l'axe des ordonnées
 */
function createAxeY(marks, scale, unit, label) {
  // Dessiner l'axe Y
  ctx.beginPath();
  ctx.moveTo(50, 50);
  ctx.lineTo(50, ctx.canvas.height - 50);
  ctx.stroke();

  // Dessiner le label de l'axe Y avec espacement entre chaque caractère
  if (label) {
    drawVerticalText(ctx, label, 10, ctx.canvas.height / 2, 15); // Espacement de 15 pixels entre chaque caractère
  }

  // Calculer l'espacement entre les marques
  const distance = (ctx.canvas.height - 100) / marks;

  // Dessiner les marques sur l'axe Y
  for (let i = 0; i <= marks; i++) {
    ctx.beginPath();
    const y = ctx.canvas.height - 50 - i * distance; // Calculer y à partir du haut de l'axe Y
    ctx.moveTo(50, y); // Positionnement légèrement à gauche de l'axe Y
    ctx.lineTo(45, y); // Positionnement légèrement à droite de l'axe Y
    ctx.stroke();
    ctx.textAlign = "center";
    if (unit) ctx.fillText(scale * i + unit, 35, y + 5);
    // Ajouter 5 pour centrer verticalement le texte
    else ctx.fillText(scale * i, 35, y + 5); // Ajouter 5 pour centrer verticalement le texte
  }
}

// Exemple d'utilisation
createAxeY(10, 10, "%", "happiness");

function generatePoints(quantity, x_min, x_max, y_min, y_max, color) {
  const points = [];
  for (let i = 0; i < quantity; i++) {
    points.push({
      x: Math.random() * (x_max - x_min) + x_min,
      y: Math.random() * (y_max - y_min) + y_min,
      color: color,
    });
  }
  return points;
}
const points = generatePoints(50, 0, 1000, 50, 100, "red");
console.log(points);

function placePoints(points, marks_x, scale_x, marks_y, scale_y) {
  const transform_x = (scale_x * marks_x) / (ctx.canvas.width - 100); // 100 étant la marge
  const transform_y = (scale_y * marks_y) / (ctx.canvas.height - 100);

  points.forEach((point) => {
    const x = 50 + point.x / transform_x;
    const y = ctx.canvas.height - 50 - point.y / transform_y;
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 0.2);
    ctx.lineTo(x, y);
    ctx.fillStyle = point.color;
    ctx.fill();
    ctx.stroke();
  });
}
placePoints(points, 10, 100, 10, 10);

function linear(points) {
  const transform_x = (scale_x * marks_x) / (ctx.canvas.width - 100); // 100 étant la marge
  const transform_y = (scale_y * marks_y) / (ctx.canvas.height - 100);
  points.foreach((point) => {
    const x = 50 + point.x / transform_x;
    const y = ctx.canvas.height - 50 - point.y / transform_y;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y);
    ctx.stroke();
  });
}
linear(points);
