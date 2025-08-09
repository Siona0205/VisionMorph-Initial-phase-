function buildPrompt(data) {
  const {
    gender,
    age,
    expression,
    faceShape,
    faceShapeDesc,
    skinTone,
    skinToneDesc,
    eyeShape,
    eyeShapeDesc,
    eyeColor,
    eyeColorDesc,
    eyebrowsShape,
    eyebrowsDesc,
    noseShape,
    noseShapeDesc,
    noseSize,
    lipsShape,
    lipsDesc,
    earsShape,
    earsPosition,
    facialHair,
    facialHairDesc,
    hairStyle,
    hairStyleDesc,
    hairColor,
    hairColorDesc,
    accessories,
    neckLength,
    neckThickness,
    maleSpecific,
    femaleSpecific,
    extraFeatures,
  } = data;

  let prompt = `Create a realistic sketch of a ${gender}, approximately ${age} years old.`;

  // Face
  if (faceShape) {
    prompt += ` Face shape: ${faceShape}`;
    if (faceShapeDesc) prompt += ` (${faceShapeDesc})`;
    prompt += `.`;
  }

  if (skinTone) {
    prompt += ` Skin tone: ${skinTone}`;
    if (skinToneDesc) prompt += ` (${skinToneDesc})`;
    prompt += `.`;
  }

  // Eyes
  if (eyeShape) {
    prompt += ` Eye shape: ${eyeShape}`;
    if (eyeShapeDesc) prompt += ` (${eyeShapeDesc})`;
    prompt += `.`;
  }

  if (eyeColor) {
    prompt += ` Eye color: ${eyeColor}`;
    if (eyeColorDesc) prompt += ` (${eyeColorDesc})`;
    prompt += `.`;
  }

  if (eyebrowsShape) {
    prompt += ` Eyebrows: ${eyebrowsShape}`;
    if (eyebrowsDesc) prompt += ` (${eyebrowsDesc})`;
    prompt += `.`;
  }

  // Nose
  if (noseShape) {
    prompt += ` Nose shape: ${noseShape}`;
    if (noseShapeDesc) prompt += ` (${noseShapeDesc})`;
    prompt += `.`;
  }

  if (noseSize) {
    prompt += ` Nose size: ${noseSize}.`;
  }

  // Lips
  if (lipsShape) {
    prompt += ` Lips shape: ${lipsShape}`;
    if (lipsDesc) prompt += ` (${lipsDesc})`;
    prompt += `.`;
  }

  // Ears
  if (earsShape) {
    prompt += ` Ears shape: ${earsShape}.`;
  }

  if (earsPosition) {
    prompt += ` Ears position: ${earsPosition}.`;
  }

  // Facial Hair
  if (facialHair) {
    prompt += ` Facial hair: ${facialHair}`;
    if (facialHairDesc) prompt += ` (${facialHairDesc})`;
    prompt += `.`;
  }

  // Hair
  if (hairStyle) {
    prompt += ` Hair style: ${hairStyle}`;
    if (hairStyleDesc) prompt += ` (${hairStyleDesc})`;
    prompt += `.`;
  }

  if (hairColor) {
    prompt += ` Hair color: ${hairColor}`;
    if (hairColorDesc) prompt += ` (${hairColorDesc})`;
    prompt += `.`;
  }

  // Neck
  if (neckLength) {
    prompt += ` Neck length: ${neckLength}.`;
  }

  if (neckThickness) {
    prompt += ` Neck thickness: ${neckThickness}.`;
  }

  // Expression
  if (expression) {
    prompt += ` Facial expression: ${expression}.`;
  }

  // Accessories
  if (accessories && accessories.length > 0) {
    prompt += ` Accessories include: ${accessories.join(", ")}.`;
  }

  // Gender-specific features
  if (gender === "male" && maleSpecific) {
    prompt += ` Male-specific features: ${maleSpecific}.`;
  }

  if (gender === "female" && femaleSpecific) {
    prompt += ` Female-specific features: ${femaleSpecific}.`;
  }

  // Extra
  if (extraFeatures) {
    prompt += ` Additional specific features: ${extraFeatures}.`;
  }

  return prompt;
}

module.exports = { buildPrompt };
